import React, { Component } from 'react';

class SearchStars extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitSearch(this.state)
    this.setState({
      searchValue: ''
    })
  }


  render() {
    return (
      <form className="search-container" onSubmit={this.handleSubmit}>
        <select name='search-stars' onChange={this.handleChange}>
          <option
            value=''
            type='dropdown'
          >
          Select a Star
          </option>
          </select>
        <button className="submitButton">Submit</button>
      </form>
    )
  }
}

export default SearchStars