const express = require('express')
const contactsRouter = require('../contact')
const app = express()


app.use('/', contactsRouter)

module.exports = app

