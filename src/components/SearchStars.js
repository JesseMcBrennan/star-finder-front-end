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

  removePlanet = (id) => {
    console.log(id)
  }

  editText = async (e) => {
    if(e.keyCode === 13){
      try{
        const url = `http://localhost:3009/api/v1/exoplanets/${e.target.id}`;
        const options = {
          method: 'PUT',
          body: JSON.stringify({
            name: e.target.textContent
          }),
          headers: { 'Content-Type': 'text/html' }
        };
        const response = await fetch(url, options);
        console.log(response)
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response;
      } catch (error) {
        return error.message;
      }
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
        <CardContainer exoplanets={this.state.selectedPlanets}
                        removePlanet={this.removePlanet}
                        editText={this.editText}
                        handleChange={this.handleChange}
        />
        </div>
    );
  }
}

export default SearchStars;