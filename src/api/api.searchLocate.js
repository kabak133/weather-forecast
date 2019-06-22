import request from '@/services/request';

export function searchLocation(payload) {
  return request({
    url: process.env.VUE_APP_COMPLETE_API + payload,
    method: 'get'
  });
}
