import axios from 'axios'

const api = axios.create({
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'content-type': 'application/json;charset=utf-8',
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    'x-rapidapi-key': '2bb2579d33msh4cf7fbaa5403a6bp1120e5jsnffa0951b4423'
  }
});

export default api