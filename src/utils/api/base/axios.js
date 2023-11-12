import axios from 'axios';
import { API } from '../../helpers';

export const defaultParams = () => {
  return {
    baseURL: API,
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export default axios;
