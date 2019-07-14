import axios from 'axios';

const API_URL = 'https://swapi.co/api/planets';
const TOTAL_PLANETS = 61;

class StarWarsPlanetService {

  static getPlanetById(idPlanet) {
    return axios.get(`${API_URL}/${idPlanet}`);
  }

  static getAllPlanets() {
    return axios.get(`${API_URL}`);
  }

  // get a randomly number between 1 and 61(total planets)
  static getIdPlanetRandomly() {
    return Math.floor((Math.random() * TOTAL_PLANETS) + 1);
  }
}

export default StarWarsPlanetService;