const mongoose = require('mongoose')
const { flightSchema } = require('../db/schema')

const Flight = mongoose.model('Flight', flightSchema)

module.exports = Flight