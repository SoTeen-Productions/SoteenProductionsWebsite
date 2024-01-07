import logo from './logo.svg';
import './App.css';
// import { useState, useEffect } from 'react';

function App() {
  const arr = [12,324,323,342,222,432,42]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <h1>az sum marto</h1>
        {arr.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </header>
    </div>
  );
}

export default App;
