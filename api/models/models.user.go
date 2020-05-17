package models

import (
	"database/sql"
	"time"
	"strings"
	"github.com/twinj/uuid"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	UUID       string    `json:"-" db:"uuid"`
	Username   string    `json:"username" db:"username"`
	Password   string    `json:"password" db:"password"`
	Email      string    `json:"email" db:"email"`
	FirstName  string    `json:"first_name" db:"firstname"`
	LastName   string    `json:"last_name" db:"lastname"`
	IsDisabled bool      `json:"-" db:"isdisabled"`
	CreatedAt  time.Time `json:"-" db:"createdat"`
	UpdatedAt  time.Time `json:"-" db:"updatedat"`

}

// ListAccounts returns all accounts stored in the database
func ListAccounts() []User {
	const q = `SELECT * FROM ActiveAccounts ORDER BY username`

	accounts := make([]User, 0)
	err := database.Select(&accounts, q)
	if err != nil {
		panic(err)
	}

	return accounts
}


// SearchAccounts returns all accounts stored in the database where the account name (firstName, middleName, lastName
// or login) contains the search string.
func SearchAccounts(search string) []User {
	const q = `SELECT * FROM ActiveAccounts
	           WHERE lower(firstName) LIKE $1 OR lower(middleName) LIKE $1 OR lower(lastName) LIKE $1 OR lower(username) LIKE $1
	           ORDER BY username`

	accounts := make([]User, 0)
	err := database.Select(&accounts, q, "%"+strings.ToLower(search)+"%")
	if err != nil {
		panic(err)
	}

	return accounts
}

// GetAccount returns an account with matching UUID
// Returns false if no account with such UUID exists
func GetAccount(uuid string) (*User, bool) {
	const q = `SELECT * FROM ActiveAccounts a WHERE a.uuid=$1`

	account := &User{}
	err := database.Get(account, q, uuid)
	if err != nil && err != sql.ErrNoRows {
		panic(err)
	}

	return account, err == nil
}

// GetAccountByUsername returns an active account (non disabled, no activation code, no reset password code)
// with matching login.
// Returns false if no account with such login exists.
func GetAccountByLogin(login string) (*User, bool) {
	const q = `SELECT * FROM ActiveAccounts a WHERE a.username=$1`

	account := &User{}
	err := database.Get(account, q, login)
	if err != nil && err != sql.ErrNoRows {
		return nil, false
	}

	return account, err == nil
}

// GetAccountByCredential returns an active account (non disabled, no activation code,
// no reset password code) with matching username or email address.
// Returns false if no account with such username or email address exists.
func GetAccountByCredential(id string) (*User, bool) {
	const q = `SELECT * FROM ActiveAccounts WHERE username=$1 or email=$1`

	account := &User{}
	err := database.Get(account, q, id)
	if err != nil && err != sql.ErrNoRows {
		panic(err)
	}

	return account, err == nil
}

// SetPassword hashes the plain text password and
// sets PWHash to the new value.
func (acc *User) SetPassword(plain string) error {
	hash, err := bcrypt.GenerateFromPassword([]byte(plain), bcrypt.DefaultCost)
	if err == nil {
		acc.Password = string(hash)
	}
	return err
}

// VerifyPassword checks whether the stored hash matches the plain text password
func (acc *User) VerifyPassword(plain string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(acc.Password), []byte(plain))
	return err == nil
}


// Create stores the account as new Account in the database.
// If the UUID string is empty a new UUID will be generated.
func (acc *User) Save() error {
	const q = `INSERT INTO Accounts (uuid, username, password, email, firstname, lastname, createdat, updatedat, isdisabled)
	           VALUES ($1, $2, $3, $4, $5, $6, now(), now(), false)
	           RETURNING *`

	if acc.UUID == "" {
		acc.UUID = uuid.NewV4().String()
	}

	err := database.Get(acc, q, acc.UUID, acc.Username, acc.Password, acc.Email, acc.FirstName, acc.LastName)

	// TODO There is a lot of room for improvement here concerning errors about constraints for certain fields
	return err
}

func (acc *User) Validate() (bool) {
	return true
}

func CreateUser(username string, password string, email string, first_name string, last_name string) (*User, error) {
	var u User
	u.UUID = uuid.NewV4().String()
	u.Username = username
	u.Email = email
	u.FirstName = first_name
	u.LastName = last_name
	u.SetPassword(password)

	if  u.Validate() {
		err := u.Save()
		if err != nil {
			return nil, err
		}
	}

	return &u, nil
}


// Check if the username and password combination is valid
/*
func IsUserValid(username, password string) bool {
	for _, u := range userList {
		if u.Username == username && u.Password == password {
			return true
		}
	}
	return false
}
*/
