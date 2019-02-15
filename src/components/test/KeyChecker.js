import React, { Component } from 'react';
import Quiz from './Quiz';

export default class KeyChecker extends Component {
    constructor(props){
        super(props);

        this.state = {
            keyMatched: false
        }
    }

    onButtonSubmit = (e) => {
        e.preventDefault();

        let key = this.props.location.state.test.key;
        let keyT = e.target.elements.keyInput.value;
        
        if (key === keyT) {
            this.setState( { keyMatched: true } )
        }
    }

    render() {
        const test = this.props.location.state.test;
        console.log(test);
        return (
            (this.state.keyMatched) ? 
                <div>
                    <Quiz Test={test} />
                </div> 
            : 
                <div className='key-form'>
                    {/* {this.props.location.state.test.key} */}
                    <h1>Please enter the key</h1>
                    <form onSubmit={this.onButtonSubmit}>
                        <input className='key-input' name='keyInput' type='text' placeholder='Enter key ...' /> <br />
                        <button className='button'>Submit</button>
                    </form>
                </div>
            
        )
    }
}
