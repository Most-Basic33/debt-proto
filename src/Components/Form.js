import React, { Component } from 'react';
import './ButtonForm.css'

import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            reason: '',
            amount: 0,
            urlDebts: `/api/debtors/`,
            urlTotal: `/api/debtor`,
            newPerson:{},
            owed:0,
            
        }
    }
addDebtors=()=>{
    const {name,phone,reason,amount, urlDebts} = this.state
    const body = {
        name,
        phone,
        reason,
        amount,
        
    }
    axios.post(`${urlDebts}`,body)
    .then(res=>{
        this.setState({newPerson:res.data,name:'',reason:'',phone:'',amount:''})
    })
}  

deleteAllDebtors = () => {
    const { urlDebts } = this.state
    axios.delete(`${urlDebts}`)
      .then(res => {
        this.setState({ array: res.data })
      })
      .catch(err => console.log(err))
    }
    totalOwed = () => {
        let num=0;
        const { urlTotal } = this.state
        axios.get(`${urlTotal}`)
          .then(res => {
            num = +res.data;
           // console.log(res.data)
            this.setState({amount: num, })
          })
          .catch(err => console.log(err))
          console.log(this.state.amount)
      }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=(e)=>{
       // e.preventDefault();
           
        console.log(this.state.owed,"owed")
        console.log(this.state.newPerson)
    }

render(){
const num = this.state.amount
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}

                    />
                    <input
                        type='text'
                        placeholder='Phone#'
                        name='phone'
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        placeholder='Reason'
                        name='reason'
                        value={this.state.reason}
                        onChange={this.handleChange}
                    />
                    <input
                        type='number'
                        placeholder='Amount'
                        name='amount'
                        value={this.state.amount}
                        onChange={this.handleChange}
                    />
                    <div className='money'>

                    {num}
                    </div>
                </form>
                <button onClick={() => this.totalOwed()}>$$Total</button>
                <button onClick={()=>this.deleteAllDebtors()}>Erase All</button>
                <button onClick={() =>this.addDebtors()} >New Debtor</button>
            </div>
        )
    }
}
export default Form

