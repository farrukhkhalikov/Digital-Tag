var mongoose = require('mongoose')
var Schema = mongoose.Schema

mongoose.Promise = global.Promise


///for bags
var bagSchema = new Schema({
    weight: String,
    color: String,
    destination: String,
    tagNumber: Number
  })

///for user
var userSchema = new Schema({
    first_name: String,
    last_name: String,
    flight: Number,
    bags: [bagSchema],
    email: {
        type: String
    },
})


///created schema for flights
var flightSchema = new Schema({
    number: Number,
    destination: String,
    arrival: String,
    departure: String,
    users: {
        type: userSchema,
        default: {} //prevent user from being null
    }
})


module.exports = {
    userSchema,
    flightSchema,
    bagSchema
}