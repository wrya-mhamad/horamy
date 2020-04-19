const express = require('express')
const router  = new express.Router()
const income = require('../controller/income')
const auth = require('../middleware/auth')

router.get('/incomes', auth, income.getIncomes)
router.post('/income', auth, income.addIncome)
router.delete('/income/:id', auth, income.deleteIncome)
router.put('/income/:id', auth, income.updateIncome)

module.exports = router