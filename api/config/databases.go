
package config

type UserDataDatabaseConfiguration struct {
	ConnectionUri string
	ConnectionPort string
	ConnectionUser string
	ConnectionPassword string
	ConnectionDatabase string
}

type SessionDataDatabaseConfiguration struct {
	ConnectionUri string
	ConnectionPort string
}

type DatabaseConfiguration struct {
	UserData UserDataDatabaseConfiguration
	SessionData SessionDataDatabaseConfiguration
}
