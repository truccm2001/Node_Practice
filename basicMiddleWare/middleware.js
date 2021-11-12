const express = require('express')
const app = express()

//Call middleware (function) logger whenever between receiving request and sending
//response
app.use(logger)

app.get('/', (req,res) => {
    res.send('Home Page')
})

app.get('/users', testNext, (req, res) => {
    console.log('User page')
    res.send('User page')
})

//Simple Middleware from scratch
function logger(req, res, next){
    console.log('middle ware are called')
    next()
}

//Next(): call next middleware but then it will come back to call the rest of the code
//in the previous middleware
function testNext(req, res, next){
    console.log('before test Next');
    next();
    console.log('after test Next')
}

app.listen(3000)