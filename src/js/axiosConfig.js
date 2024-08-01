import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api', // Update with your backend API base URL
});

export default instance;
