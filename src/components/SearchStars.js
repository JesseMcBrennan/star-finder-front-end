import React, { Component } from 'react';

class SearchStars extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: [],
      selectedStar: []
    }
  }

  componentDidMount() {
    this.populateStars()
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.selectedStar)
    this.populateExoplanets()
  }

  populateExoplanets = async (selectedStar) => {
    try {
      const response = await fetch(process.env.REACT_APP_DATABASE_API_URL + `/api/v1/exoplanets?star_id=${this.stateselectedStar}`)
      const data = await response.json()
      console.log(data)
    }
    catch(error) {
      return error.message
    }
  }

  populateStars = async (stars) => {
    try {
      const response = await fetch(process.env.REACT_APP_DATABASE_API_URL + '/api/v1/stars')
      const data = await response.json()
      this.setState({
        searchValue: data
      })
      console.log(this.state.searchValue)
    }
    catch(error) {
      return error.message
    }
  }

  render() {
    const stars = this.state.searchValue
    const starNames = stars.map((star) => {
      return <option id={star.id} value={star.id} key={star.name}>{star.name} </option>
    });
  
    return (
      <form className="search-container" onSubmit={this.handleSubmit}>
        <select name='selectedStar' onChange={this.handleChange}>
          <option 
            value=''
            type='dropdown'
          >
          Select a Star
          </option>
            {starNames} 
          </select>
        <button>Submit</button>
      </form>
    )
  }
}

export default SearchStars