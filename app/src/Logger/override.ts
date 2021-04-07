import logger from './logger'

(function () {
  const _log = console.log
  const _warn = console.warn
  const _info = console.info
  const _error = console.error
  const _debug = console.debug

  console.error = function (message, data) {
    _error.apply(console, arguments)
    logger.error(message, data)
  }
  console.log = function (message, data) {
    _log.apply(console, arguments)
    logger.info(message, data)
  }
  console.info = function (message, data) {
    _info.apply(console, arguments)
    logger.info(message, data)
  }
  console.warn = function (message, data) {
    _warn.apply(console, arguments)
    logger.warn(message, data)
  }
  console.debug = function (message, data) {
    _debug.apply(console, arguments)
    logger.debug(message, data)
  }
})()