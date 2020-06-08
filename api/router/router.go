package router

import (
	"github.com/gin-gonic/gin"
	"github.com/dnk0/citsci.cauterize/api/middlewares"
	"github.com/dnk0/citsci.cauterize/api/handlers"
)

func InitializeRoutes(router *gin.Engine) {

	// Use the setUserStatus middleware for every route to set a flag
	// indicating whether the request was from an authenticated user or not
	router.Use(middlewares.SetUserStatus())
	router.Use(middlewares.CORSMiddleware())


	// Group user related routes together
	userRoutes := router.Group("/u")
	{
		// Handle POST requests at /u/login
		// Ensure that the user is not logged in by using the middleware
		userRoutes.POST("/login", handlers.HandleLogin)

		// Handle POST requests at /u/logout
		// Ensure that the user is logged in by using the middleware
		userRoutes.POST("/logout", middlewares.EnsureLoggedIn(), handlers.HandleLogout)

		// Handle POST requests at /u/refresh
		// Ensure that the user is logged in by using the middleware
		userRoutes.POST("/refresh", middlewares.EnsureLoggedIn(), handlers.HandleTokenRefresh)

		// Handle POST requests at /u/register
		// Ensure that the user is not logged in by using the middleware
		userRoutes.POST("/register", middlewares.EnsureNotLoggedIn(), handlers.HandleRegister)
	}
}
