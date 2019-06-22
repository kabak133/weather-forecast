import request from '@/services/request';

export function getWeather(payload) {
  return request({
    url: process.env.VUE_APP_FORECAST_API + payload,
    method: 'get'
  });
}
