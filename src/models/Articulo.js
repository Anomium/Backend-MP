const { Schema, model } = require('mongoose')

const articuloSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
})

module.exports = model('Articulo', articuloSchema)