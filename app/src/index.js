console.log('INDEX.JS LOAD')

var express = require('express');
var morgan = require('morgan')
var ecsFormat = require('@elastic/ecs-morgan-format')
var logger = require('./logger')
var app = express();

app.use(morgan(ecsFormat())) 

app.get('/info', function(req, res) {
    res.send('get get get')
    logger.info('teste info')
})

app.get('/error', function(req, res) {
    res.send('get get get')
    logger.error('teste error')
})

app.get('/warning', function(req, res) {
    res.send('get get get')
    logger.warning('teste warning')
})

app.listen(3033)

console.log('APP STARTED')