const express =require('express')
const server = require('./server')

server.listen(8000,()=> console.log("Hello port is 8000"))