import request from '../utils/request';

export function getWeather(payload) {
  return request({
    url: process.env.VUE_APP_ROOT_API + payload + '&days=7',
    method: 'get'
  });
}
