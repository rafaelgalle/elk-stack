import winston from 'winston'
import ecsFormat from '@elastic/ecs-winston-format'

const base = './logs'

const loggerWinston = winston.createLogger({
    format: ecsFormat(), 
    transports: [
      new winston.transports.File({ filename: base + '/info.log', level: 'info' }),
      new winston.transports.File({ filename: base + '/error.log', level: 'error' }),
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

export default new Logger()
