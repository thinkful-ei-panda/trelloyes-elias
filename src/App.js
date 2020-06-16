import React from 'react';
//import logo from './logo.svg';
import './App.css';
import STORE from './store';
import List from './List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="App-list">
      {STORE.lists.map(list => (
        <List
        key={list.id}
        header={list.header}
        cards={list.cardIds.map(id => STORE.allCards[id])}
        />
      ))}
      </div>
    </div>
    
  );
}

export default App;
