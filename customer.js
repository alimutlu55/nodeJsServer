var mongoose = require('mongoose')
var Schema = mongoose.Schema

var customerSchema = new Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
    created:Date
})

customerSchema.pre('save',function(next){
    
    var currentDate = new Date()

    this.created = currentDate
    
    next()
})

var Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer