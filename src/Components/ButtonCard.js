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
        array:[]
    }
    

}

getDebtors = () => {
    const { urlDebts } = this.state
    axios.get(`${urlDebts}`)
      .then(res => {
        this.setState({ array: res.data });

      })

      .catch(err => console.log(err))

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
render(){
return(
<div className='buttons'>
    <button onClick={()=>this.deleteDebtor(this.state.id)} >Delete</button>
    <button>Update</button>
  
</div>
     )

 }
 }
 export default Button