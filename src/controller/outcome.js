const Outcome = require('../models/Outcomes')

const getOutcomes = async (req, res) => {
    const outcomes = await Income.findAll()
    .then(inc => res.send(inc))
}

const addOutcome = async (req, res) => {
    const outcome = req.body

    outcome.date = new Date(outcome.date)

    await Income.create(income)
    .then(out => res.send({msg: 'success', out}))
    .catch(e => res.send({msg: 'failed'}))

}

const deleteOutcome = async (req, res) => {
    const id = req.params.id

    await Outcome.destroy({where: {id}})
    .then(code => {
        if(code == 1){
            res.send({msg: 'succss'})
        }else{
            res.send({msg: 'failed'})
        }
    })
}

const updateOutcome = async (req, res) => {
    const {id} = req.params
    const outcome = req.body

    await Outcome.update(outcome, {where: {id}})
    .then(code => {
        if (code == 1) {
            res.send({msg: 'success'})
        }else{
            res.send({msg: 'failed'})
        }
    })

}

module.exports = {
    getOutcomes,
    addOutcome,
    deleteOutcome,
    updateOutcome
}