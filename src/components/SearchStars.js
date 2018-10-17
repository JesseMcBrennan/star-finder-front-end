import React, { Component } from 'react';
import CardContainer from './CardContainer';



class SearchStars extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: [],
      selectedStar: '',
      selectedPlanets: []
    }

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
    console.log(this.state.selectedStar);
    this.populateExoplanets();
  }

  populateExoplanets = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_DATABASE_API_URL + `/api/v1/exoplanets?star_id=${this.state.selectedStar}`)
      const data = await response.json()
      this.setState({
        selectedPlanets: data
      })
    }
    catch(error) {
      return error.message

    }
  }

  populateStars = async (stars) => {
    try {
      const response = await fetch(process.env.REACT_APP_DATABASE_API_URL + '/api/v1/stars');
      const data = await response.json();
      this.setState({
        searchValue: data
      });
    } catch (error) {
      return error.message;
    }
  }

  render() {
    const stars = this.state.searchValue
    const starNames = stars.map((star) => {

      return <option id={star.id} value={star.id} key={star.id}>{star.name} </option>
    });
  
    return (
      <div>
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
        <CardContainer exoplanets={this.state.selectedPlanets}/>
        </div>
    );
  }
}

export default SearchStars;