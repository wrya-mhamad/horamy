const BuyBill = require('../models/Buy_bills')
const BuyBillItem = require('../models/Buy_bill_items')

const getBills = async (req, res) => {
    await BuyBill.findAll({ include: BuyBillItem})
    .then(bills => res.send({msg: 'success', bills}))
    .catch(e => res.send({msg: 'failed'}))
}

const addBill = async (req, res) => {
    const {billHead} = req.body
    billHead.date = new Date(billHead.date)
    
    const {billBody} = req.body
    await BuyBill.create(billHead)
    .then(bill => {
        billBody.forEach(item => {
            item.buyBillId = bill.id
        });
        
          BuyBillItem.bulkCreate(billBody)
         .then(() => res.send({msg: 'success'}))
        
    })
    .catch(e => res.send(e))
}

const deleteBill = async (req, res) => {
    const {id} = req.params

    await BuyBill.destroy({where: {id}})
    .then(code => {
        if (code == 1) {
            res.send({
                msg: 'success'
            })
        }else{
            res.send({
                msg : 'failed'
            })
        }
    })
}

const updateBill = async (req, res) => {
    const {id} = req.params
    const item  = req.body

    await BuyBill.update(item, {where: {id}})
    .then(code => {
        if (code == 1) {
            res.send({
                msg: 'success'
            })
        }else{
            res.send({
                msg : 'failed'
            })
        }
    })

}

module.exports = {
    getBills,
    addBill,
    deleteBill,
    updateBill
}