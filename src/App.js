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
              qStmnt: 'Question 1 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
            },{
              qNo: 2,
              qStmnt: 'Question 2 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
            }, {
              qNo: 3,
              qStmnt: 'Question 3 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
            }, {
              qNo: 4,
              qStmnt: 'Question 4 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
            },{
              qNo: 5,
              qStmnt: 'Question 5 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
            }, {
              qNo: 6,
              qStmnt: 'Question 6 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
            } ]
          }, {
            id: 2,
            name: 'JavaScript Quiz 2',
            key: 'javascript2',
            content: [ {
              qNo: 1,
              qStmnt: 'Question 1 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
            }, {
              qNo: 2,
              qStmnt: 'Question 2 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
            }, {
              qNo: 3,
              qStmnt: 'Question 3 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
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
              qStmnt: 'Question 1 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
            }, {
              qNo: 2,
              qStmnt: 'Question 2 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
            }, {
              qNo: 3,
              qStmnt: 'Question 3 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
            } ]
          }, {
            id: 2,
            name: 'Python Quiz 2',
            key: 'python2',
            content: [ {
              qNo: 1,
              qStmnt: 'Question 1 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
            }, {
              qNo: 2,
              qStmnt: 'Question 2 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
            }, {
              qNo: 3,
              qStmnt: 'Question 3 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
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
              qStmnt: 'Question 1 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
            }, {
              qNo: 2,
              qStmnt: 'Question 2 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
            }, {
              qNo: 3,
              qStmnt: 'Question 3 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
            } ]
          }, {
            id: 2,
            name: 'React Quiz 2',
            key: 'react2',
            content: [ {
              qNo: 1,
              qStmnt: 'Question 1 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
            }, {
              qNo: 2,
              qStmnt: 'Question 2 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
            }, {
              qNo: 3,
              qStmnt: 'Question 3 statement',
              qChoice: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
              ans: ['Option 3']
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