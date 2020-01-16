import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const MyComponent = (props) => {
  return <>
      <ul>
        {props.list.map(row => <li>{row}</li>)}
      </ul>
      </>
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       <h1> list with warnings</h1>
       <MyComponent list={[1,2,3]} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
