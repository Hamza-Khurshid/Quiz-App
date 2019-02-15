import React, { Component } from 'react';

export default class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            test: this.props.Test,
            qNo: 0,
            cAns: 0,
            tQs: 0
        }
    }

    onButtonSubmit = (e) => {
        e.preventDefault();

        const { test, qNo, cAns, tQs } = this.state;
        let r = e.target.elements.mRadio.value;
        console.log(r);
        console.log(test.content[qNo].ans[0]);
        if( test.content[qNo].ans[0] === r ) {

            if( qNo+1 === test.content.length ) {
                alert('You secured ' + (cAns+1) + ' from ' + (tQs+1) );
            } else {
                this.setState( {
                    qNo: qNo+1,
                    cAns: cAns+1,
                    tQs: tQs+1
                } )
            }
        } else {
            if( qNo+1 === test.content.length ) {
                alert('You secured ' + cAns + ' from ' + (tQs+1) );
            } else {
                this.setState( {
                    qNo: qNo+1,
                    cAns,
                    tQs: tQs+1
                } )
            }
        }
    }


    render() {
        // console.log(this.state.test);
        const { test } = this.state;
        return (
            <form onSubmit={this.onButtonSubmit}>
                <h2> {this.state.qNo+1}. {test.content[this.state.qNo].qStmnt}</h2>
                <input type='radio' name='mRadio' value= {test.content[this.state.qNo].qChoice[0]} /> { test.content[this.state.qNo].qChoice[0] }
                <input type='radio' name='mRadio' value= {test.content[this.state.qNo].qChoice[1]} /> { test.content[this.state.qNo].qChoice[1] }
                <input type='radio' name='mRadio' value= {test.content[this.state.qNo].qChoice[2]} /> { test.content[this.state.qNo].qChoice[2] }
                <input type='radio' name='mRadio' value= {test.content[this.state.qNo].qChoice[3]} /> { test.content[this.state.qNo].qChoice[3] } <br />
                <button className='button'>Submit</button>
            </form>
        )
    }
}