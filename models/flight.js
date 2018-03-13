const mongoose = require('mongoose')
const Schema = require('../schema')

const Flight = mongoose.model('Flight', Schema.FlightSchema)

module.exports = Flight