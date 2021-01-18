import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api-college-dashboard-app.herokuapp.com/api',
});

export default instance;
