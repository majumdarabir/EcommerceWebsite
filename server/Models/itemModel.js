const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const itemSchema = mongoose.Schema({
    itemname: {
        type: String,
        require: true

    },
    itemdesc: {
        type: String,
        require: true
    },
    git: {
        type: String,
        default:"gitlink not available for this ",
    },
    link:{
        type: String,
        require: true
    },
    postedBy: {
        type: ObjectId,
        ref: "User"
    }

}, {
    timestamps: true
})

module.exports = mongoose.model("Item", itemSchema)