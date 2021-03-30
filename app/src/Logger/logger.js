var winston = require('winston')
var ecsFormat = require('@elastic/ecs-winston-format')

const base = './logs'

const loggerWinston = winston.createLogger({
    format: ecsFormat(), 
    transports: [
      new winston.transports.File({ filename: 'elk-stack-combined.log', level: 'info' }),
      new winston.transports.File({ filename: 'elk-stack-error.log', level: 'error' }),
      // new winston.transports.Console({ level: 'debug' }),
    ]
})

class Logger {
    info (message, data) {
        loggerWinston.info(message, data)
    }
    error (message, data) {
        loggerWinston.error(message, data)
        // TODO - Send alert sms, email...
    }
    warn (message, data) {
        loggerWinston.warn(message, data)
    }
    debug (message, data) {
        // if (process.env.NODE_ENV == 'production') return
        loggerWinston.debug(message, data)
    }
}

module.exports = new Logger()