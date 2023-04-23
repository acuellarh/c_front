import axios from 'axios';

const instance = axios.create({
  // eslint-disable-next-line no-undef
  //baseURL: process.env.REACT_APP_API_URL,  
  baseURL: 'http://localhost:3001',
  timeout: 5000
});

export default instance