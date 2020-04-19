const express = require('express')
const router  = new express.Router()
const sellBill = require('../controller/sellBill')
const auth = require('../middleware/auth')

router.get('/sellBills', auth, sellBill.getBills)
router.post('/sellBill', auth, sellBill.addBill)
router.delete('/sellBill/:id', auth, sellBill.deleteBill)
router.put('/sellBill/:id', auth, sellBill.updateBill)

module.exports = router
