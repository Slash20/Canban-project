import axios from 'axios';

const fetchData = async (url) => {
  const response = await axios.get(url);
  const data = response.data;
  return data;
};

export { fetchData };
