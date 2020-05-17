package config

import (
	"fmt"
	"github.com/spf13/viper"
	"github.com/dnk0/citsci.cauterize/api/log"
)

type Configuration struct {
	Server ServerConfiguration
	Databases DatabaseConfiguration
}

var Config Configuration
var logger = log.Logger("CONFIG")

func init() {
	// TODO: config path by env name or by cli option
	viper.SetConfigName("config")
	viper.AddConfigPath(".")

	if err := viper.ReadInConfig(); err != nil {
		logger(log.FATAL, fmt.Sprintf("Error reading config file, %s", err))
	}
	err := viper.Unmarshal(&Config)
	if err != nil {
		logger(log.FATAL, fmt.Sprintf("Unable to decode config into struct, %v", err))
	}
	logger(log.INFO, "Config loaded successfully")
}


