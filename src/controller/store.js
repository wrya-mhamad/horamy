const Store = require('../models/Store')
const getItems = async (req, res) => {
    await Store.findAll()
    .then(item => res.send(item))
}

const addItem = async (req, res) => {
    const item = req.body
    item.crt_date = new Date(item.crt_date)
    item.exp_date = new Date(item.exp_date)
 
         await Store.create(item)
         .then(item => res.send({msg: 'success', item}))
         .catch(e => res.send({msg: 'failed', item}))
}

const deleteItem = async (req, res) => {
    
    const {id} = req.params
    const item = await Store.destroy({where: {id}})        
    .then(code => {
        if (code == 1) {
            res.send({
                msg: 'success'
            })
        }else{
            res.send({
                msg : 'item was not found'
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            msg: 'failed'
        })
    })
}

const updateItem = async (req, res) => {
    const id = req.params.id
    const item =  req.body 

    Store.update(item, { where: {id} })
    .then(code => {
        if(code == 1){
            res.send({
                msg: 'success'
            })
        } else{
            res.send({
                msg: 'item was not found'
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            msg: 'error when updating item'
        })
    })
}

module.exports = {
    getItems,
    addItem,
    deleteItem,
    updateItem
}