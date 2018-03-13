const express = require('express')
const router = express.Router()
const User = require('../models/user')

//================================
//  READ (see all users)
//================================

router.get('/', (req, res) => {
    User.find().then(users => { 
        
        res.send(users)
        console.log(users)
    }).catch(err => {
        console.log(err)
        res.json("caught error")
    })
})


router.get('/:userId', (req, res) => {
    const userId = req.params.userId
    User.findById(userId)
        .then((user) => {
            res.json(user)
        }).catch(error => {
            console.log(err)
            res.json("caught error")
        })
})




// create a new user
router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.json(newUser)
        console.log(newUser)
    } catch (error) {
        console.log(error)
        res.sendStatus(500) 
    }
})

//delete a user
router.delete('/:userId/delete', async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.userId) 
        res.sendStatus(200) 
    } catch (error) {
        console.log(error)
        res.sendStatus(500) 
    }
})

// edit a user
router.patch('/:userId', async (req, res) => {
    try {
        const updatedUser =
            await User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
        res.json(updatedUser) 
    } catch (error) {
        console.log(error)
        res.sendStatus(500) 
    } 
})

module.exports = router