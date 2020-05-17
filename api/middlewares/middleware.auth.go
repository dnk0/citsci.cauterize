package middlewares

import (
	"fmt"
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/dnk0/citsci.cauterize/api/models"
	"github.com/dnk0/citsci.cauterize/api/log"
)

var logger = log.Logger("AUTH-MIDDLEWARE")

// This middleware ensures that a request will be aborted with an error
// if the user is not logged in
func EnsureLoggedIn() gin.HandlerFunc {
	return func(c *gin.Context) {
		// If there's an error or if the token is empty
		// the user is not logged in
		loggedInInterface, _ := c.Get("is_logged_in")
		loggedIn := loggedInInterface.(bool)
		if !loggedIn {
			//if token, err := c.Cookie("token"); err != nil || token == "" {
			c.AbortWithStatus(http.StatusUnauthorized)
		}
	}
}

// This middleware ensures that a request will be aborted with an error
// if the user is already logged in
func EnsureNotLoggedIn() gin.HandlerFunc {
	return func(c *gin.Context) {
		// If there's no error or if the token is not empty
		// the user is already logged in
		loggedInInterface, _ := c.Get("is_logged_in")
		loggedIn := loggedInInterface.(bool)
		if loggedIn {
			// if token, err := c.Cookie("token"); err == nil || token != "" {
			c.AbortWithStatus(http.StatusUnauthorized)
		}
	}
}

// This middleware sets whether the user is logged in or not
func SetUserStatus() gin.HandlerFunc {
	return func(c *gin.Context) {
		//Extract the access token metadata
		metadata, err := models.ExtractTokenMetadata(c.Request)
		if err != nil {
			c.Set("is_logged_in", false)
			logger(log.ERROR, fmt.Sprintf("Error extracting authentication metadata from auth header: %s", err.Error()))
			return
		}
		_, authErr := models.FetchAuth(metadata)
		if authErr != nil {
			c.Set("is_logged_in", false)
			logger(log.ERROR, fmt.Sprintf("Error fetching session for requested auth header: %s", authErr.Error()))
			return
		}
		c.Set("is_logged_in", true)
	}
}

