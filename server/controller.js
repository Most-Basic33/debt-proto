 let debts = require('../../node_server_project/debts.json');
 let totalOwed = require('../totalOwed.json')
 //const e = require('express')
 const date1 = new Date()
 let log = console.log


//log(date1.toLocaleString());
//const time = date1;
module.exports = {

    getDebtors: (req, res) => {

        res.status(200).send(debts)
    },
    searchID: (req, res) => {
        let debtorsID = debts.find(e => e.id === +req.params.id)


        res.status(200).send(debtorsID)
    },
    addDebtor: (req, res) => {
        let newDebtor = {
            id: debts[debts.length - 1].id + 1,
            name: req.body.name,
            phone: req.body.phone,
            reason: req.body.reason,
            amount: req.body.amount,
            date: date1,

        }
        debts.push(newDebtor)
        res.status(200).send(debts)
    },
    deleteDebtor: (req, res) => {
        let index = debts.findIndex(e => e.id === +req.params.id)
        if (index !== -1) {
            debts.splice(index, 1)
        }
        res.status(200).send(debts)
    },
    deleteAllDebtors: (req, res) => {
        let empty = {
            id: 0,
            name: '',
            phone: '',
            reason: '',
            amount: 0,
            date: date1
        }


        debts = [{ ...empty }];
        res.status(200).send(debts)
    },
    updateAmount: (req, res) => {

        let index = debts.find(e => e.id === +req.params.id)
        index['amount'] = req.body.amount;

        res.status(200).send(debts)
    },
    totalOwed: (req, res) => {
        let total = []
        for (key in debts) {
            total.push(debts[key].amount);
        }
        let ans = total.reduce((a, b) => a + b)
        log(total,"last one")
        log(ans)
        totalOwed=[ans]
         log(totalOwed,"totalowed")
        res.status(200).send(totalOwed)
    }
}
// let total = []
// for (key in debts) {
//     total.push(debts[key].amount);
// }
// let ans = total.reduce((a, b) => a + b)
// //log(total,"last one")
// log(ans) 

