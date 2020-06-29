 import React,{Component} from 'react';
 import '../Components/ButtonCard.css'
 import axios from 'axios'

 class Button extends Component{
constructor(props){
    super(props);
    this.state={
        urlDebts: `/api/debtors/`,
        amount:0,
        id_:props.id,
        array:[],
        editMode:false
    }
    

}

getDebtors = () => {
    const { urlDebts } = this.state
    axios.get(`${urlDebts}`)
      .then(res => {
        this.setState({ array: res.data });

      })

     //-- .catch(err => console.log(err))

  }
deleteDebtor = (id) => {
  
    const { urlDebts,id_ } = this.state
    id=id_ 
    console.log(id)
    axios.delete(`${urlDebts}${id}`)
      .then(res => {
          console.log(res.data)
        this.setState({ array: res.data })
      })
      .catch(err => console.log(err))

  }
  updateAmount = () => {
  
    const { urlDebts } = this.state
    axios.put(`${urlDebts}${this.props.id}`, { amount:this.state.amount})
      .then(res => {
        console.log(res.data,"res.data")
        // this.setState({ array: res.data })
      })
      .catch(err => console.log(err))
  }
  //toggle between true and falsle
  toggleEdit=()=>{

    this.setState({
      editMode:!this.state.editMode
    })
  }
  handleChange=(e)=>{
    this.setState({
    amount:+e.target.value
    })
  }
render(){
return(
<div className='buttons'>
{this.state.editMode?<div><input
onChange={this.handleChange}
type='number'
 /><button onClick={this.updateAmount} >Submit</button>  </div>:null}
    <button onClick={()=>this.deleteDebtor(this.state.id)} >Delete</button>
    <button onClick={this.toggleEdit}>Update</button>

  
</div>
     )

 }
 }
 export default Button