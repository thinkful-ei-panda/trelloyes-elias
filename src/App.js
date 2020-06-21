import React from 'react';
//import logo from './logo.svg';
import './App.css';
import STORE from './store';
import List from './List';

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
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
    </main>
    
  );
}

export default App;
