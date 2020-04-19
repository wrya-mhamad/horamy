const Income = require('../models/Incomes')

const getIncomes = async (req, res) => {
    const incomes = await Income.findAll()
    .then(inc => res.send(inc))
}

const addIncome = async (req, res) => {
    const income = req.body

    income.date = new Date(income.date)

    await Income.create(income)
    .then(inc => res.send({msg: 'success', inc}))
    .catch(e => res.send({msg: 'failed'}))

}

const deleteIncome = async (req, res) => {
    const id = req.params.id

    await Income.destroy({where: {id}})
    .then(code => {
        if(code == 1){
            res.send({msg: 'succss'})
        }else{
            res.send({msg: 'failed'})
        }
    })
}

const updateIncome = async (req, res) => {
    const {id} = req.params
    const income = req.body

    await Income.update(income, {where: {id}})
    .then(code => {
        if (code == 1) {
            res.send({msg: 'success'})
        }else{
            res.send({msg: 'failed'})
        }
    })

}

module.exports = {
    getIncomes,
    addIncome,
    deleteIncome,
    updateIncome
}