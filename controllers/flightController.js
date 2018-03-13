const express = require('express');
const router = express.Router({ mergeParams: true })
const Flight = require('../db/models/flight')

router.get('/', async (req, res) => {
    Flight.find({}).then(flights => { 
        
        res.json(flights)
    }).catch(err => {
        console.log(err)
        res.json("caught error")
    })
})


router.get('/:flightId', async (req, res) => {
    try {
        console.log(req.params.flightId)
        const flight = await Flight.findById(req.params.flightId)
        res.json(flight)
    } catch (err) {
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const newFlight = await Flight.create(req.body)
        res.json(newFlight)
    }   catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.delete('/:flightId', async (req, res) => {
    try {
        await FlightfindByIdAndRemove(req.params.flightId)
        res.sendStatus(200)
    }   catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.patch('/:flightId', async (req, res) => {
    try {
        const updatedFlight =
         await Flight.findByIdAndUpdate(req.params.flightId, req.body, {new: true})
    console.log('FromFlightPatch:'+req.body)
        res.json(updatedFlight)
    } catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
})

module.exports = router