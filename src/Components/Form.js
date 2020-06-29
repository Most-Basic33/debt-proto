import React, { Component } from 'react';
import './ButtonForm.css'
import Button from './ButtonCard';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            reason: '',
            amount: 0
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form >
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
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </form>
                <button>$$Total</button>
                <button>Erase All</button>
                <button>New</button>
            </div>
        )
    }
}
export default Form

