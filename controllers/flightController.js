var express = require('express')
var router = express.Router({
    mergeParams: true
})
var Flight = require('../models/flight')
var User = require('../models/user')
var Bag = require('../models/bags')

 

///index route
router.get('/', (req, res) => {
 Flight.find().then((flights) => {
     console.log(flights)
     res.render('flight/index', {
         flights: flights
     })
     console.log('Flight data', flights)
 })
})

/// show route
router.get('/:id', (req, res) => {
    Flight.findById(req.params.id).then((flight) => {
        res.render('flight/show', {
            flight: flight
        })
    }) 
  })

  
  
  
  module.exports = router