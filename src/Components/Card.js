import React from 'react';

//it takes a while to get there so initally my methods don't work
const Card = (props) => {
   
    let { id, name, phone, reason, amount, date } = props
    //  let {id, name, }=props.array

    return (
        <div>
            <main>
                <h3>ID: {id}</h3>
                <h2>Name: {name}</h2>
                <p>Phone:# {phone}</p>
                <p>Reason: {reason}</p>
                <p>Amount: {amount}</p>
                <p>Date: {date}</p>
            </main>
        </div>
    )
}
export default Card