import axios from 'axios';
import { Message } from 'element-ui';

const timer = 100 * 1000;
// axios

const service = axios.create({
  headers: {
    Accept: 'application/json'
  },
  timeout: timer // time out for request
});
service.defaults.headers['Content-Type'] = 'application/json';

// response
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (response.status !== 200 && response.status !== 201) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      });
      return Promise.reject('error');
    } else {
      return response.data;
    }
  },
  error => {
    const { data } = error.response;
    let message;
    if (data) {
      message = data.error.message;
    } else {
      message = error.message;
    }
    Message({
      message: message,
      type: 'warning',
      duration: 5 * 1000
    });

    return Promise.reject(error);
  }
);

export default service;
