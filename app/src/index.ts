import express from 'express'
import morgan from 'morgan'
import ecsFormat from '@elastic/ecs-morgan-format'
import './Listener/eventListener'
import './Logger/override'
// import './Logger/logGenerator' // uncomment to automatically log
import { UserController as userOne } from './ErrorHandlerTests/Test1/UserController'
import { UserController as userTwo } from './ErrorHandlerTests/Test2/UserController'
import { UserController as userThree } from './ErrorHandlerTests/Test3/UserController'
import { UserController as userFour } from './ErrorHandlerTests/Test4/UserController'
import { UserController as userFive } from './ErrorHandlerTests/Test5/UserController'

var app = express()
app.use(morgan(ecsFormat()))

app.get('/handle-error-one', async function(req, res, next) {
    const reqFake = { body: JSON.parse('{"name": "Rafael", "cpf": "0"}') }
    const userController = new userOne()
    userController.createUserr(reqFake, res, next)
})

app.get('/handle-error-two', async function(req, res, next) {
    const reqFake = { body: JSON.parse('{"name": "Rafael", "cpf": "000000000"}') }
    const userController = new userTwo()
    userController.createUserr(reqFake, res, next)
})

app.get('/handle-error-three', async function(req, res, next) {
    const reqFake = { body: JSON.parse('{"name": "Rafael", "cpf": "000000000"}') }
    const userController = new userThree()
    userController.createUserr(reqFake, res, next)
})

app.get('/handle-error-four', async function(req, res, next) {
    const reqFake = { body: JSON.parse('{"name": "Rafael", "cpf": "000000000"}') }
    const userController = new userFour()
    userController.createUserr(reqFake, res, next)
})

app.get('/handle-error-five', async function(req, res, next) {
    const reqFake = { body: JSON.parse('{"name": "Rafael", "cpf": "0"}') }
    const userController = new userFive()
    userController.createUserr(reqFake, res, next)
})

app.get('/info', async function(req, res) {
    res.send('get get get')
    console.info('teste info', { teste: 'info' })
})

app.get('/error', function(req, res) {
    res.send('get get get')
    console.error('teste error', { teste: 'error' })
})

app.get('/warning', function(req, res) {
    res.send('get get get')
    console.warning('teste warn', { teste: 'warn' })
})

app.get('/debug', function(req, res) {
    res.send('get get get')
    console.debug('teste debug', { teste: 'debug' })
})

app.use((error: any, req: express.Request, res: express.Response , next: express.NextFunction) => {
    console.error('MiddlewareError: ', error)
    const statusCode = error.statusCode ? error.statusCode : 500
    const message = error.message ? error.message : error.toString()
    const classError = error.classError ? error.classError : 'Unmapped'
    return res.status(statusCode).json({ error: message, classError: classError })
})

app.listen(3033)

console.log('APP STARTED')
