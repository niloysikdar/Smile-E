import axios from 'axios';

const getUsers = async () => {
  const result = await axios.get('http://localhost:5000/users');
  return result;
};

export { getUsers };
