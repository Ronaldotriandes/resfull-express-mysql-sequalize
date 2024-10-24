const express = require('express')
const service = require('./service')
const route = express.Router();


route.get('/', service.all)

route.post('/', service.create)

route.get('/:id', service.detail)

route.put('/:id', service.update)

module.exports = route