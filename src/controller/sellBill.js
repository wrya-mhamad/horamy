const SellBill = require('../models/Sell_bills')
const SellBillItem = require('../models/Sell_bill_items')

const getBills = async (req, res) => {
    await SellBill.findAll({ include: SellBillItem})
    .then(bills => res.send({msg: 'success', bills}))
    .catch(e => console.log(res.send({msg: 'failed'}))
    )
}

const addBill = async (req, res) => {
    const {billHead} = req.body
    billHead.date = new Date(billHead.date)
    
    const {billBody} = req.body
    await SellBill.create(billHead)
    .then(bill => {
        billBody.forEach(item => {
            item.sellBillId = bill.id
        });
        
          SellBillItem.bulkCreate(billBody)
         .then(() => res.send({msg: 'success'}))
        
    })
    .catch(e => res.send(e))
}

const deleteBill = async (req, res) => {
    const {id} = req.params

    await SellBill.destroy({where: {id}})
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

    await SellBill.update(item, {where: {id}})
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