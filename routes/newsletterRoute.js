const express = require('express')
const newsletter = express.Router()

const secondPostRequest = require('../controllers/newsletterController')
newsletter.post('/', secondPostRequest)

module.exports = newsletter;