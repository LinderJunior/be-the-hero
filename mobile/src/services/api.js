import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://192.168.43.110:3333'
 // baseURL: 'http://192.168.8.118:3333'
    baseURL: 'http://10.20.1.145:3000'
});

export default api;