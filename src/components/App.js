import React, { Component } from 'react';
import '../css/App.css';
import SearchStars from './SearchStars'

class App extends Component {
  constructor() {
    super()
    this.state = {
      stars: []
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch(process.env.REACT_APP_DATABASE_API_URL + '/')
      const data = await response.json()
      console.log(data)
      console.log('you are on heroku heney')
    }
    catch(error) {
      return error.message
    }
  }
  
  render() {
    return (
      <div className="App">
        <SearchStars />
      </div>
    );
  }
}

export default App;