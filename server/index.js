const express= require('express')
const app = express()
const port = 6663
const ctrl = require('./controller')
app.use(express.json())

 app.get('/api/debtors', ctrl.getDebtors)//get all debtors
app.get('/api/debtors/:id', ctrl.searchID)//get debtors by ID
app.post('/api/debtors', ctrl.addDebtor)//add new debtors
app.put('/api/debtors/:id', ctrl.updateAmount)//update amount owed
app.delete('/api/debtors/:id', ctrl.deleteDebtor)//Delete Debtors by id
app.delete('/api/debtors', ctrl.deleteAllDebtors)//delete all
app.get('/api/debtor', ctrl.totalOwed)//get count of whats of owe
//Possibly display the time on the card


app.listen(port,() =>console.log('server working onport 6660') )
