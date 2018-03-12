var mongoose = require('mongoose')
var Schema = mongoose.Schema



///for bags
var bagSchema = new Schema({
    weight: Number,
    color: String,
    flight: Number,
    user: String,
    tagNumber: String,
    
})

///for user
var userSchema = new Schema({
    name: String,
    destination: String,
    flightInfo: String,
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
    user: [userSchema]
})


module.exports = {
    userSchema,
    flightSchema,
    bagSchema
}