import axios from 'axios';
import { BASE_URL } from './config';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  const authToken = Cookies.get('authToken');
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

export default instance;
