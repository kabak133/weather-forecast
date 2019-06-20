import store from '../store/'
import { Message } from 'element-ui';

const Location = {
  init(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition)
    } else {
      Message({
        message: 'Geolocation is not supported by this browser.',
        type: 'error',
        duration: 5 * 1000
      });
    }
  },


  showPosition ({coords}) {
    const latLng ={
      lat: coords.latitude,
      lng: coords.longitude
    }
    console.log('latLng', latLng)
    store.dispatch('weather/SetCurrentLocation', latLng)
  }
}

export default Location;