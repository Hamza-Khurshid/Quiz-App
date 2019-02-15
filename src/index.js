import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter ,Route,Switch} from 'react-router-dom'
import './index.css';
import App from './App';
import Comp from './components/test/Comp';
import * as serviceWorker from './serviceWorker';
import KeyChecker from './components/test/KeyChecker';


ReactDOM.render(<BrowserRouter>
    <Switch>
        
        <Route exact path='/tests/:name' component={Comp} /> 
        <Route exact path='/' component={App} />
        <Route path='/tests/:name/:test' component={KeyChecker} />
    </Switch>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
