import store from '../store/'
import { Message } from 'element-ui';

const Location = {
  init(){
    this.setFitstData()
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition)
    } else {
      Message({
        message: 'Geolocation is not supported by this browser.',
        type: 'error',
        duration: 5 * 1000
      });
    }
    console.log('navigator.geolocation',navigator.geolocation)
  },

  setFitstData(){
    // Set firs data if Geolocate is enable
    store.dispatch('weather/SelectedLocationWeather', "London")
  },
  showPosition ({coords}) {
    console.log('gggg')
    const latLng ={
      lat: coords.latitude,
      lng: coords.longitude
    }
    store.dispatch('weather/SetCurrentLocation', latLng)
  }
}

export default Location;