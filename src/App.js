import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Card from './Components/Card'
import Header from './Components/Header';
import ButtonCard from './Components/ButtonCard'
import Form from './Components/Form'
import Footer from './Components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlDebts: `/api/debtors/`,
      urlTotal: `/api/debtor`,
      counter: 0,
      array: [],//for the entire collection
      person: {},//to get on person at a time
      amount: 0,//to pull the total amount,


    }
  }
  componentDidUpdate(){
    this.getDebtors()
}
  componentDidMount() {
    this.getDebtors();
 
    this.setState({
      person: this.state.array[0],
    })
   
  }
  
  addDebtors = () => {
    const { urlDebts } = this.state
    axios.post(`${urlDebts}`)
      .then(res => {
        this.setState({
          array: res.dat
        })
      })
      .catch(err => console.log(err))
  }
  SearhID = (id) => {
    const { urlDebts } = this.state
    axios.get(`${urlDebts}${id}`)
      .then(res => {
        this.state({ person: res.data })
      })
      .catch(err => console.log(err))

  }
  deleteDebtor = (id) => {
    const { urlDebts } = this.state
    axios.delete(`${urlDebts}${id}`)
      .then(res => {
        this.setState({ array: res.data })
      })
      .catch(err => console.log(err))

  }
  // deleteAllDebtors = () => {
  //   const { urlDebts } = this.state
  //   axios.delete(`${urlDebts}`)
  //     .then(res => {
  //       console.log(res.data)
  //       this.setState({ array: res.data })
  //     })
  //     .catch(err => console.log(err))
  // }
  
  getDebtors = () => {
    const { urlDebts } = this.state
    axios.get(`${urlDebts}`)
      .then(res => {
        this.setState({ array: res.data });

      })

      .catch(err => console.log(err))

  }
  updateAmountArray=(axiosArray)=>{
    this.setState({
      array:axiosArray
    })
  }
  render() {

    const { array, counter } = this.state
    // console.log(array[0].name)
    //const outPut = (array).push.filter((e,i)=>e.id === counter)

    const mapp = this.state.array.map((ele, i) => {
      return (
        <div key={i}>
          <Card
            id={ele.id}
            name={ele.name}
            phone={ele.phone}
            reason={ele.reason}
            amount={ele.amount}
            date={ele.date}
          />
          <ButtonCard 
           //delete={this.deleteDebtor}
            update={this.updateAmountArray}
            id={ele.id}
          />
        </div>
      )
    })
    return (
      <div className="main_app">
        <Header />
        <Form 
                />
        {mapp}
        <Footer />
      </div>
    )
  }

}

export default App;
