var fs = require('fs');
var winston = require('winston')
var ecsFormat = require('@elastic/ecs-winston-format')

const base = '/logs'

const loggerInfo = winston.createLogger({
  format: ecsFormat(), 
  transports: [
    new winston.transports.File({ filename: base + '/info.log', level: 'info' })
  ]
})

const loggerError = winston.createLogger({
    format: ecsFormat(), 
    transports: [
      new winston.transports.File({ filename: base + '/error.log', level: 'error' })
    ]
})

const loggerWarning = winston.createLogger({
    format: ecsFormat(), 
    transports: [
      new winston.transports.File({ filename: base + '/warning.log', level: 'warn' }),
    ]
})

class Logger {
    info (message) {
        loggerInfo.info(message)
    }
    error (message) {
        loggerError.error(message, { err: new Error('boom') })
    }
    warning (message) {
        loggerWarning.warn(message)
    }
}

module.exports = new Logger()