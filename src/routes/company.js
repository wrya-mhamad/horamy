const express = require('express')
const router  = new express.Router()
const company = require('../controller/company')
const auth = require('../middleware/auth')

router.get('/companies', auth, company.getCompanies)
router.post('/company', auth, company.addCompany)
router.delete('/company/:id', auth, company.deleteCompany)
router.put('/company/:id', auth, company.updateCompany)
module.exports = router