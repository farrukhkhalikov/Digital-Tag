var schema = require('../db/schema')
var mongoose = require('mongoose')


var User = mongoose.model('User', schema.userSchema)



module.exports = User