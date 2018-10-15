import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = ''
  }

  async componentDidMount() {
    try {
      const response = await fetch(process.env.REACT_APP_DATABASE_API_URL )
      const data = await response.json()
      console.log(data)
      console.log('you are on heroku heney')
    }
    catch(error) {
      console.log(error.message)
    }
  }

  render() {
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
        </header>
      </div>
    );
  }
}

export default App;
