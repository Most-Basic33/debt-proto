import React, {Component} from 'react';
import axios from 'axios'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      urlDebts: `http://localhost:6663/api/debtors`,
      urlTotal: ``
    }
  }
  render(){
    return(
      <div></div>
    )
  }
}


export default App;
