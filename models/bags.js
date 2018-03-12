var schema = require('../db/schema')
var mongoose = require('mongoose')
var Bags = mongoose.model('Bags', schema.bagSchema)


module.exports = Bags