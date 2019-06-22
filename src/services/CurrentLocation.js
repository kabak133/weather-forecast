import store from '../store/'
import { Message } from 'element-ui'

const Location = {
  init () {
    this.setFitstData()
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition)
    } else {
      Message({
        message: 'Geolocation is not supported by this browser.',
        type: 'error',
        duration: 5 * 1000
      })
    }
  },
  setFitstData () {
    // Set firs data if Geolocate is enable
    store.dispatch('weather/SelectedLocationWeather', 'London')
  },
  showPosition ({coords}) {
    const latLng = {
      lat: coords.latitude,
      lng: coords.longitude
    }
    store.dispatch('weather/SetCurrentLocation', latLng)
  }
}

export default Location