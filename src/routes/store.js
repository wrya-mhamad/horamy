const express = require('express')
const router  = new express.Router()
const store = require('../controller/store')
const auth = require('../middleware/auth')

router.post('/item', auth, store.addItem)
router.get('/items',auth, store.getItems)
router.put('/item/:id',auth, store.updateItem)
router.delete('/item/:id', auth, store.deleteItem)

module.exports = router