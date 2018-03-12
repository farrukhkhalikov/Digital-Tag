var schema = require('../db/schema')
var mongoose = require('mongoose')
var Flight = mongoose.model('Flight', schema.flightSchema)


module.exports = Flight