const express = require('express')
const login = require('../controller/login')
const router  = new express.Router()

router.post('/login', login)

module.exports = router