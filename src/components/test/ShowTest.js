import React, { Component } from 'react';
import App, { TestConsumer } from '../../App';
import './Test.css';
import LogoutImage from './logout.png';


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

        this.setState( { auth: false } )
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
                                    <ol>
                                        {value.map((course)=>(
                                            <li key={course.name} className='list-item'>{course.name}</li>
                                        ))}
                                    </ol>
                            )
                        }
                    
                    </TestConsumer>

                </div>
                 : <App /> }
            </div>
        )
    }
}