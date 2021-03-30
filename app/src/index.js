require('./override')
var express = require('express');
var morgan = require('morgan')
var ecsFormat = require('@elastic/ecs-morgan-format')
var app = express();

app.use(morgan(ecsFormat())) 

app.get('/info', function(req, res) {
    res.send('get get get')
    console.info('teste info')
})

app.get('/error', function(req, res) {
    res.send('get get get')
    console.error('teste error')
})

app.get('/warning', function(req, res) {
    res.send('get get get')
    console.warning('teste warning')
})

app.listen(3033)

console.log('APP STARTED')
