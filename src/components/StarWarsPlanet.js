import React, { Component } from 'react';
import './StarWarsPlanet.css';
import StarWarsPlanetService from './StarWarsPlanetService';

export class StarWarsPlanet extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      showLoading: false,
      planet: {
        name: '',
        population: '',
        climate: '',
        terrain: '',
        films: '',
      }
    }
  }

  componentDidMount() {
    this.loadPlanet();
  }

  loadPlanet = () => {
    const idPlanet = StarWarsPlanetService.getIdPlanetRandomly();

    // show loading div
    this.setState({
      showLoading: true
    });

    StarWarsPlanetService.getPlanetById(idPlanet)
      .then(response => {
        console.log(response.data);

        this.setState({
          showLoading: false, // after load the json data, show loading div
          planet: response.data // get  the json data in planet state
        });

      })
      .catch(error => {
        console.error(error);
        alert(`Error on loading planet ${idPlanet}`);
      });
  };

  


  render() {

    let loading;

    // if showLoading is true, show loading div
    if (this.state.showLoading) {
      loading = (
        <div className="loading">
          <h2>Loading...</h2>
        </div>
      );
    } else {
      loading = null;
    }
    

    return (
      <div className="main">
        <div className="star-war-planet">
          <div className="star-war-planet-title">
            { this.state.planet.name }
          </div>
          <div className="star-war-planet-details">
            <span className="label">Population: <span className="normal">{ this.state.planet.population }</span></span>
            <span className="label">Climate: <span className="normal">{ this.state.planet.climate }</span></span>
            <span className="label">Terrain: <span className="normal">{ this.state.planet.terrain }</span></span>
            <span className="featured">Featured in { this.state.planet.films.length } films </span>
          </div>
        </div>

        <div className="button-next">
          <input type="button" value="Next" onClick={this.loadPlanet} disabled={this.state.showLoading} 
            className={this.state.showLoading === true ? 'button-disabled' : ''} />
        </div>

        { loading }
      </div>
    )
  }
}

export default StarWarsPlanet;
