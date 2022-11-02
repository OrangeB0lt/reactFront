import React from 'react';
import logo from './logo.svg';
import './App.css';
import internal from 'stream';
import { Person } from './objects/Person';

export type { Person };

let num: number;

const person = new Person('nathan', 31)

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
