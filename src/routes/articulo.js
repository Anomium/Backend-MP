const { Router } = require('express')
const router = Router()

const { createArticulo, deleteArticulo, getArticulo, getArticulos, updateArticulo } = require('../controllers/ArticuloController')

router.route('/')
    .get(getArticulos)
    .post(createArticulo)

router.route('/:id')
    .get(getArticulo)
    .put(updateArticulo)
    .delete(deleteArticulo)

module.exports = router