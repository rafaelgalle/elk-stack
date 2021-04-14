var countLog = 1
function myLoopLog() {
  setTimeout(function() {
    console.log('teste log', { teste: 'log' })
    countLog++
    if (countLog < 60) {
      myLoopLog()
    }
  }, 2000)
}

var countWarn = 1
function myLoopWarn() {
  setTimeout(function() {
    console.warn('teste warn', { teste: 'warn' })
    countWarn++
    if (countWarn < 40) {
        myLoopWarn()
    }
  }, 4000)
}

var countError = 1
function myLoopError() {
  setTimeout(function() {
    console.error('teste error', { teste: 'error' })
    countError++
    if (countError < 12) {
        myLoopError()
    }
  }, 10000)
}

var countDebug = 1
function myLoopDebug() {
  setTimeout(function() {
    console.debug('teste debug', { teste: 'debug' })
    countDebug++
    if (countDebug < 12) {
        myLoopDebug()
    }
  }, 10000)
}

myLoopLog()
myLoopWarn()
myLoopError()
myLoopDebug()
