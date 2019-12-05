const { Schema, model } = require('mongoose')

const articuloSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
})