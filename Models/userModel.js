const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema({
   username:{
        type:String,
        require:true,
   },
   email:{
        type:String,
        require:true,
        unique:true
   },
   password:{
        type:String,
        require:true
   }

})

userSchema.pre("save",async function(next){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})
module.exports = mongoose.model("User",userSchema)