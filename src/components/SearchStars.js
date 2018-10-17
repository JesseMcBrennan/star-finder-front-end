import React, { Component } from 'react';

class SearchStars extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: [],
      selectedStar: []
    };
  }

  componentDidMount() {
    this.populateStars();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  }

  populateStars = async (stars) => {
    try {
      const response = await fetch(process.env.REACT_APP_DATABASE_API_URL + '/api/v1/stars');
      const data = await response.json();
      this.setState({
        searchValue: data
      });
      console.log(this.state.searchValue);
      console.log('stardata');
    } catch (error) {
      return error.message;
    }
  }

  render() {
    const stars = this.state.searchValue;
    const starNames = stars.map((star) => <option value={star.name} key={star.name}>{star.name}</option>
    );

    return (
      <form className="search-container" onSubmit={this.handleSubmit}>
        <select name='search-stars' onChange={this.handleChange}>
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
    );
  }
}

export default SearchStars;