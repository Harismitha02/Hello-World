import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import React from 'react'
import {Link} from 'react-router-dom'

const App = () => {
  return (
  <div className="App">
    <header className="App-header">
    <a className="App-text"
        >
          Hello World!!
        </a>
    <ul>
      <li>
        <a href="/Home">Home</a>
      </li>
      <li>
        <a href="/Profile">Profile</a>
      </li>
    </ul>
    </header>
  </div>
  )
  }
export default App;





