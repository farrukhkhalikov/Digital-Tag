var express = require('express')
var router = express.Router({
    mergeParams: true
})
var Flight = require('../models/flight')
var User = require('../models/user')
var Bag = require('../models/bags')

///index route 
// flight id
router.get('/', (req, res) => {
    Flight.findById(req.params.flightId).then((flight) => {
        var bags = flight.bags
        res.render('bags/index', {
            flight: flight,
            bags: bags
        })

    })
})

//create new seat
router.post('/', (req, res) => {

    // Get Flight we need to save seat to
    Flight.findById(req.params.flightId).then((flight) => {

        // THEN once we have the Flight, take req.body and make a new seat
        const newSeat = new Seat({
            bag: bag,
            user: user
        })

        // Push seat to Flight.seats
        flight.bags.push(newBag)

        // Save Flight
        return flight.save()
    }).then((updatedFlight) => {

        // Redirect to all seats
        res.redirect(`/flights/${req.params.flightId}/bags`)
    })
})




/// show route
//flight id and seat id
router.get('/:id', (req, res) => {
    Flight.findById(req.params.flightId).then((flight) => {
        Seat.findById(req.params.id).then((user) => {
            res.render('bags/show', {
                flight: flight,
                bag: bag
            })
        })
    })
})

//put OR patch for updating existing seats

/// route
router.get('/:id/edit', (req, res) => {
    Flight.findById(req.params.flightId).then((flight) => {
        var bag = flight.bags.id(req.params.id)
        res.render('bags/edit', {
            flightId: req.params.flightId,
            bag: bag
        })
    })
})

router.patch('/:id', (req, res) => {
    console.log("HITTING MY SEAT PATCH METHOD")        
    console.log("Current Flight ID used for query:", req.params)

    Flight.findById(req.params.flightId).then((flight) => {
        console.log("Current Flight:", flight)
  
      // We don't have a nice method like findByIdAndUpdate here
      // so instead we need to manually change the seats values
      const bag = flight.bags.id(req.params.id)
      console.log(bag)
      bag.row = req.body.row
            
      // Then Save the Flight
      return flight.save()
    }).then((updatedflight) => {
      res.redirect(`/flights/${req.params.flightId}/bags/`)
    }).catch((err) => {
        console.log(err)
    })
  })



// delete
router.delete('/:id', (request, response) => {
    console.log('here from the delete route')
    Flight.findById(request.params.flightId).then((flight) => {

        const bagIdToDelete = request.params.id;
        console.log('hit the delete ',bagIdToDelete)

        flight.bags.id(bagIdToDelete).remove()
        return flight.save()
        
        
        
        
        })

        .then(() => {
            console.log(`Successfully deleted user!`);

            response.redirect(`/flights/${request.params.flightId}/bags/`);
    });
})



module.exports = router