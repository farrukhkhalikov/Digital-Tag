const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../models/user')
const Flight = require('../models/flight')

//================================
//  READ (see all users)
//================================




router.get('/', (req, res) => {
    const flightId = req.params.id
    ////console.log(flightId)
    Flight.findById(flightId)
    
    .then((flight) => { 
        var user = flight.users
        res.json(user)
        //console.log(user)
    }).catch(err => {
        console.log(err)
        res.json("caught error")
    })
})


router.get('/:userId', (req, res) => {
    const flightId = req.params.id

    const userId = req.params.userId
    ///console.log(userId)
    Flight.findById(flightId)
        .then((flight) => {
            var user = flight.users.id(userId)

            res.json(user)
        }).catch(error => {
            console.log(err)
            res.json("caught error")
        })
})




// create a new user
router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body.user)
        console.log(newUser)

        const user = await Flight.findById(req.params.id)

        user.flight.push(newUser)

        const saved = await user.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})
//         Flight.findById(flightId).then((flight) => {
//             var user = flight.users
//             console.log(user)
//         })


//         const newUser = await User.create(req.body)
//         res.json(newUser)
//         console.log(newUser)
//     } catch (error) {
//         console.log(error)
//         res.sendStatus(500) 
//     }
// })

//delete a user
router.delete('/:userId/delete', async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id)
        flight.user.id(req.params.userId).remove()
        const saved = await user.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

//         await User.findByIdAndRemove(req.params.userId) 
//         res.sendStatus(200) 
//     } catch (error) {
//         console.log(error)
//         res.sendStatus(500) 
//     }
// })

// edit a user
router.patch('/:userId', async (req, res) => {
    try {
        const flightId = req.params.id

        const updatedUser =
            await User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
        res.json(updatedUser) 
    } catch (error) {
        console.log(error)
        res.sendStatus(500) 
    } 
})

module.exports = router