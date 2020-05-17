package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	r "github.com/dnk0/citsci.cauterize/api/router"
	m "github.com/dnk0/citsci.cauterize/api/models"
	"github.com/dnk0/citsci.cauterize/api/config"
	"github.com/dnk0/citsci.cauterize/api/log"
)

var router *gin.Engine
var logger = log.Logger("HTTP")

func main() {
	m.InitDb()

	// Set Gin to production mode
	gin.SetMode(gin.ReleaseMode)

	// Set the router as the default one provided by Gin
	router = gin.Default()

	// Initialize the routes
	r.InitializeRoutes(router)

	// Start serving the application
	logger(log.INFO, fmt.Sprintf("HTTP Server starting on Port %v", config.Config.Server.Port))
	router.Run(fmt.Sprintf(":%v", config.Config.Server.Port))
}

