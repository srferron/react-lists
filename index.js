import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

// Asignamos el parametro key en los li para que React no saque el warning. Le viene bien para poder hacer mas rapido el renderizado del dom
const MyComponent = (props) => {
  return <>
      <ul>
      
        {props.list.map(item => <li key={item}>{item}</li>)}
      </ul>
      </>
}

const Books = (props) => {
  // Se debe asignar el key al componente y no al li como en el caso anterior ya que lo que hacemos es una lista de componentes y no de li como antes
  const books = props.books.map(book => <Book key={book.id} book={book}/>);
  return <>
      <ul>
        {books}
      </ul>
      </>
}

const Book = (props) => {
  return <>
      <li>
        Book with name {props.book.name} and identifier {props.book.id}
      </li>
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
    const books = [{
        id: 'id1',
        name: 'book1'
      },
      {
        id: 'id2',
        name: 'book2'
      }
    ]
      
    return (
      <div>
       <h1> list with warnings until I set key property on li</h1>
       <MyComponent list={[1,2,3]} />
       <h1>Books</h1>
        <Books books={books}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
