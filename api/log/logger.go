package log

import (
	"os"
	"fmt"
	"io"
	"time"
)

// HandlerFunc defines the handler used by gin middleware as return value.
type HandlerFunc func(level int, m string)

var DefaultWriter io.Writer = os.Stdout

type consoleColorModeValue int

const (
	autoColor consoleColorModeValue = iota
	disableColor
	forceColor
)

const (
	green   = "\033[97;42m"
	white   = "\033[90;47m"
	yellow  = "\033[90;43m"
	red     = "\033[97;41m"
	blue    = "\033[97;44m"
	magenta = "\033[97;45m"
	cyan    = "\033[97;46m"
	reset   = "\033[0m"
)

var consoleColorMode = autoColor

const (
	ALL          =      0
	DEBUG        =  10000
	INFO         =  20000
	WARN         =  30000
	ERROR        =  40000
	FATAL        =  50000
)

// LoggerConfig defines the config for Logger middleware.
type LoggerConfig struct {
	// Optional. Default value is gin.defaultLogFormatter
	Formatter LogFormatter

	// Output is a writer where logs are written.
	// Optional. Default value is gin.DefaultWriter.
	Output io.Writer

	// SkipPaths is a url path array which logs are not written.
	// Optional.
	SkipPaths []string
}

// LogFormatter gives the signature of the formatter function passed to LoggerWithFormatter
type LogFormatter func(params LogFormatterParams) string

// LogFormatterParams is the structure any formatter will be handed when time to log comes
type LogFormatterParams struct {
	Tag string
	// TimeStamp shows the time after the server returns a response.
	TimeStamp time.Time
	// Level of the log message.
	Level int
	// ErrorMessage is set if error has occurred in processing the request.
	ErrorMessage string
	// Keys are the keys set on the request's context.
	Keys map[string]interface{}
}

// StatusCodeColor is the ANSI color for appropriately logging http status code to a terminal.
func (p *LogFormatterParams) LevelColor() string {
	level := p.Level

	switch {
	case level > ALL   && level <= DEBUG:
		return yellow
	case level > DEBUG && level <=  INFO:
		return blue
	case level > INFO  && level <=	WARN:
		return cyan
	case level > WARN  && level <= ERROR:
		return red
	case level > ERROR && level <= FATAL:
		return red
	default:
		return white
	}
}

func (p *LogFormatterParams) LevelString() string {
	level := p.Level

	switch {
	case level > ALL   && level <= DEBUG:
		return "DEBUG"
	case level > DEBUG && level <=  INFO:
		return "INFO"
	case level > INFO  && level <=	WARN:
		return "WARN"
	case level > WARN  && level <= ERROR:
		return "ERROR"
	case level > ERROR && level <= FATAL:
		return "FATAL"
	default:
		return "ALL"
	}
}

// ResetColor resets all escape attributes.
func (p *LogFormatterParams) ResetColor() string {
	return reset
}

// defaultLogFormatter is the default log format function Logger middleware uses.
var defaultLogFormatter = func(param LogFormatterParams) string {
	var levelColor, resetColor string
	levelColor = param.LevelColor()
	resetColor = param.ResetColor()

	return fmt.Sprintf("[%s %s %s] %s |%s %s %s| %s |\n",
		levelColor,
		param.Tag,
		resetColor,
		param.TimeStamp.Format("2006/01/02 - 15:04:05"),
		levelColor,
		param.LevelString(),
		resetColor,
		param.ErrorMessage,
	)
}

// Logger instances a Logger middleware that will write the logs to gin.DefaultWriter.
// By default gin.DefaultWriter = os.Stdout.
func Logger(tag string) HandlerFunc {
	return LoggerWithConfig(LoggerConfig{}, tag)
}

// LoggerWithConfig instance a Logger middleware with config.
func LoggerWithConfig(conf LoggerConfig, tag string) HandlerFunc {
	formatter := conf.Formatter
	if formatter == nil {
		formatter = defaultLogFormatter
	}

	out := conf.Output
	if out == nil {
		out = DefaultWriter
	}

	return func(level int, m string) {
		// Log only when path is not being skipped
		param := LogFormatterParams{}

		param.Level = level
		param.Tag = tag
		param.TimeStamp = time.Now()
		param.ErrorMessage = m

		fmt.Fprint(out, formatter(param))
	}
}
