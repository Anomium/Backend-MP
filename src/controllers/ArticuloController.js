const articuloCtrl = {}

const Articulo = require('../models/Articulo')

articuloCtrl.getArticulos = async (req, res) => {
    const articulo = await Articulo.find()
    res.json(articulo)
}

articuloCtrl.createArticulo = async (req, res) => {
    const newArticulo = new Articulo(req.body)
    
    await newArticulo.save()
    res.json({ message: 'Articulo saved' })
}

articuloCtrl.getArticulo = async (req, res) => {
    const Articulo = await Articulo.findById(req.params.id)
    res.json(note)
}

articuloCtrl.updateArticulo = async (req, res) => {
    await Articulo.findOneAndUpdate(req.params.id, req.body)
    res.json({ message: 'Articulo update' })
}

articuloCtrl.deleteArticulo = async (req, res) => {
    await Articulo.findByIdAndDelete(req.params.id)
    res.json({ message: 'Articulo Delete' })
}

module.exports = articuloCtrl