import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-app-33e58.firebaseio.com'
});

export default instance;
