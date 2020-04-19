const express = require('express')
const router  = new express.Router()
const buyBill = require('../controller/buyBill')
const auth = require('../middleware/auth')

router.get('/buyBills', auth, buyBill.getBills)
router.post('/buyBill', auth, buyBill.addBill)
router.delete('/buyBill/:id', auth, buyBill.deleteBill)
router.put('/buyBill/:id', auth, buyBill.updateBill)

module.exports = router

