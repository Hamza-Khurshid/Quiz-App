import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Signin from './components/login/Login';
import ShowTest from './components/test/ShowTest';

const TestApiContext = React.createContext( {} );
const TestProvider = TestApiContext.Provider;
export const TestConsumer = TestApiContext.Consumer;


class App extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          name: 'Ali',
          pass: 'ali123'
        },
        {
          id: 2,
          name: 'Zain',
          pass: 'zain123'
        },
        {
          id: 3,
          name: 'Sohaib',
          pass: 'sohaib123'
        }
      ], 
      courses: [
        {
          name: 'JavaScript',
          test: [ {
            id: 1,
            name: 'JavaScript Quiz 1',
            key: 'javascript1',
            content: [ {
              qNo: 1,
              qStmnt: '',
              qChoice: ['', '', '', ''],
              ans: ['']
            } ]
          }, {
            id: 2,
            name: 'JavaScript Quiz 2',
            key: 'javascript2',
            content: [ {
              qNo: 1,
              qStmnt: '',
              qChoice: ['', '', '', ''],
              ans: ['']
            } ]
          } ] 
        }, 
        {
          name: 'Python',
          test: [ {
            id: 1,
            name: 'Python Quiz 1',
            key: 'python1',
            content: [ {
              qNo: 1,
              qStmnt: '',
              qChoice: ['', '', '', ''],
              ans: ['']
            } ]
          }, {
            id: 2,
            name: 'Python Quiz 2',
            key: 'python2',
            content: [ {
              qNo: 1,
              qStmnt: '',
              qChoice: ['', '', '', ''],
              ans: ['']
            } ]
          } ] 
        }, 
        {
          name: 'React',
          test: [ {
            id: 1,
            name: 'React Quiz 1',
            key: 'react1',
            content: [ {
              qNo: 1,
              qStmnt: '',
              qChoice: ['', '', '', ''],
              ans: ['']
            } ]
          }, {
            id: 2,
            name: 'React Quiz 2',
            key: 'react2',
            content: [ {
              qNo: 1,
              qStmnt: '',
              qChoice: ['', '', '', ''],
              ans: ['']
            } ]
          } ] 
        }
      ]
    }

  }

  render() {
    return (
      <TestProvider value={this.state.courses}>
        { (localStorage.getItem('username') === null ) ? <Signin Users={this.state.users} /> :
          <ShowTest />
        }
        
      </TestProvider>
    );
  }
}

export default hot(module)(App);