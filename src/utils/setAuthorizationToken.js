import axios from 'axios';

export default token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${typeof token === 'string' ? token : ''}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
