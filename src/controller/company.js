const Company = require('../models/Companies')

const getCompanies = async (req, res) => {
    const companies = await Company.findAll()
    .then(comp => res.send(comp))
}

const addCompany = async (req, res) => {
    const company = req.body

    await Company.create(company)
    .then(comp => res.send({msg: 'success', comp}))
    .catch(e => res.send({msg: 'failed', column: 'phone'}))

}

const deleteCompany = async (req, res) => {
    const id = req.params.id

    await Company.destroy({where: {id}})
    .then(code => {
        if(code == 1){
            res.send({msg: 'succss'})
        }else{
            res.send({msg: 'failed'})
        }
    })
}

const updateCompany = async (req, res) => {
    const {id} = req.params
    const company = req.body

    await Company.update(company, {where: {id}})
    .then(code => {
        if (code == 1) {
            res.send({msg: 'success'})
        }else{
            res.send({msg: 'failed'})
        }
    })

}

module.exports = {
    getCompanies,
    addCompany,
    deleteCompany,
    updateCompany
}