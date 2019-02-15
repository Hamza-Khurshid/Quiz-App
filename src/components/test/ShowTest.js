import React, { Component } from 'react';
import App, { TestConsumer } from '../../App';
import './Test.css';
import LogoutImage from './logout1.png';
import { Link } from 'react-router-dom';


export default class ShowTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            auth: true
        }
    }

    onImageClick = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');

        this.setState( { auth: false } );
    }

    render() {
        return (
            <div>
                { (this.state.auth) ? 
                <div className='test-style'>
                    <div className='header'> 
                        <h1 className='head-title'>Welcome to BootCamp</h1>
                        <img onClick={this.onImageClick} className='logout-img' src={LogoutImage} alt='Lgout' /> 
                    </div>
                    <h2 style={{marginLeft: '10px'}}>Select your test: </h2>
                    <TestConsumer className='tests-list'>
                        {
                            (value)=>(
                                value.map((course)=>(
                                    <div key={course.name}>
                                        <Link to={{ pathname: `/tests/${course.name}`,
                                            state : course
                                        }} className='list-item' >{course.name}</Link>
                                    </div>
                                ))
                            )
                        }
                    </TestConsumer>
                </div>
                 : <App /> }
            </div>
        )
    }  
}