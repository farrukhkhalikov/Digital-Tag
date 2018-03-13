require('dotenv').config()
var mongoose = require('mongoose')
var User = require('../models/user')
var Flight = require('../models/flight')
var Bags = require('../models/bags')

mongoose.connect(process.env.MONGODB_URI)




var bag1 = new Bags({
    weight: 123,
    color: "black",
    destination: "Paris",
    tagNumber: 124123123,

})

var flightBags = new Bags({
    weight: 120,
    color: "grey",
    destination: "Frankfurt",
    tagNumber: 123134324,
})

var ryan = new User({
    first_name: 'Ryan',
    last_name: 'Sneider',
    flight: 0987,
    email: 'ryan@gmail.com',
    bags: [bag1]

})




var steve = new User({
    first_name: 'Steve',
    last_name: 'Gosling',
    flight: 0987,
    email: 'steve@gmail.com',
    bags: []

})



var owen = new User({
    first_name: "Owen",
    last_name: "Liversidge",
    flight: 09889,
    email: "owen@liversidge.com",
    bags: [flightBags]
})



var flight = new Flight({
    number: 9827439287394887,
    destination: "Amsterdam",
    arrival: 1445,
    departure: 0900,
    users: [owen]
})

var flight2 = new Flight({
    number: 090897239470978,
    destination: "Frankfurt",
    arrival: 1315,
    departure: 1800,
    users: [ryan]
})

var flight3 = new Flight({
    number: 0923840239840998203,
    destination: "London",
    arrival: 0930,
    departure: 1700,
    users: [steve]
})

var flight4 = new Flight({
    number: 123240089902308,
    destination: "Paris",
    arrival: 1130,
    departure: 2100,
    users: []
})

User.remove().then(() => {
    return Bags.remove().then(() => {
        return Flight.remove()
    })
}).then(() => {
    //console.log(flight)
    Flight.insertMany([flight, flight2, flight3, flight4]).then(() => {
        console.log('saved worked')
    })
})