var signals = {
  'SIGHUP': 1,
  'SIGINT': 2,
  'SIGTERM': 15,
  'uncaughtException': 666
}

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', reason.stack || reason)
})

Object.keys(signals).forEach((signal) => {
  process.on(signal, () => {
      console.warn(`process received a ${signal} signal`)
      process.exit(signals[signal])
  })
})
