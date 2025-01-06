import axios from 'axios';

const restaurantApi = axios.create({
  baseURL: 'https://restaurant-api.dicoding.dev',
});

export { restaurantApi };
