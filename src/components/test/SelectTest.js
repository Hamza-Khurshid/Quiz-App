import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'; 
import Comp from './Comp';


export default class SelectTest extends Component {
    render() {
        return (
            <div>
                <h1>Select Test</h1>
                <BrowserRouter>
                    <Route path='/select-test' component={Comp} />
                </BrowserRouter>
            </div>
        )
    }
}
