const express = require('express')
const router  = new express.Router()
const outcome = require('../controller/outcome')
const auth = require('../middleware/auth')

router.get('/outcomes', auth, outcome.getOutcomes)
router.post('/outcome', auth, outcome.addOutcome)
router.delete('/outcome/:id', auth, outcome.deleteOutcome)
router.put('/outcome/:id', auth, outcome.updateOutcome)

module.exports = router