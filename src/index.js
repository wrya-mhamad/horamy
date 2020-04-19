const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const userRouter = require('./routes/user')
const storeRouter = require('./routes/store')
const companyRouter = require('./routes/company')
const buyBillRouter = require('./routes/buy_bill')
const sellBillRouter = require('./routes/sell_bill')
const incomeRouter = require('./routes/income')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(userRouter)
app.use(storeRouter)
app.use(companyRouter)
app.use(buyBillRouter)
app.use(sellBillRouter)
app.use(incomeRouter)

app.listen(process.env.PORT || 4000, () => console.log('Server is running'))