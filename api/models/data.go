package models

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq" // pg driver needs to be imported in order to load it
	"github.com/dnk0/citsci.cauterize/api/config"
	"github.com/dnk0/citsci.cauterize/api/log"
)

var database *sqlx.DB
var logger1 = log.Logger("DATABASES")

// TODO: move database to common location db handler
// InitDb initializes a global database connection.
// An existing connection will be closed.
func InitDb() {
	if database != nil {
		err := database.Close()
		if err != nil {
			panic(err)
		}
	}

	var err error
	var connectionUrl = fmt.Sprintf(
		"postgres://%s:%s@%s:%s/%s?sslmode=disable",
		config.Config.Databases.UserData.ConnectionUser,
		config.Config.Databases.UserData.ConnectionPassword,
		config.Config.Databases.UserData.ConnectionUri,
		config.Config.Databases.UserData.ConnectionPort,
		config.Config.Databases.UserData.ConnectionDatabase)
	database, err = sqlx.Connect("postgres", connectionUrl)
	if err != nil {
		panic(err)
	}
	logger1(log.INFO, "Connection to UserData Database successful")
}

