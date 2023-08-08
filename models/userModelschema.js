const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is a must'],
        minLength:[3,'Name must be above 3 chars'],
        maxLength:[30,'Name must be below 30 chars'],
        trim:true
    },
    email:{
         type:String,
         required:[true,'email is must'],
         unique:true    
    }
})

module.exports = mongoose.model("User",userSchema)