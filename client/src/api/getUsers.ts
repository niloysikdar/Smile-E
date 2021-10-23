import axios from 'axios';
import { BASEURL } from './baseURL';

export const getUsers = async () => {
  const result = await axios.get(`${BASEURL}/users`);
  return result;
};
