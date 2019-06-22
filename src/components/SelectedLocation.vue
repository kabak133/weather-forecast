<template>
  <div class="wrp-selected-location mb-5"
       v-if="currentLocationWeather">

    <div class="selected-location">
      <selected-location-data
          :current-location="currentLocation" />
    </div>

    <el-tabs type="border-card" value="forecast">
      <el-tab-pane label="Current" name="current">
        <selected-location-simple
            :weather-data="currentLocationWeather" />
      </el-tab-pane>
      <el-tab-pane label="7 Day Forecast" name="forecast">
        <selected-location-weather-period
          :weather-forecast="forecast"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SelectedLocationData from './SelectedLocationData'
import SelectedLocationSimple from './SelectedLocationWeatherCurrent'
import SelectedLocationWeatherPeriod from './SelectedLocationWeatherPeriod'

export default {
  name: 'SelectedLocation',
  components: {
    SelectedLocationData,
    SelectedLocationSimple,
    SelectedLocationWeatherPeriod
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      locationWeather: 'weather/getLocationWeather',
    }),
    currentLocationWeather () {
      return this.locationWeather.current
    },
    currentLocation () {
      return this.locationWeather.location
    },
    forecast(){
      return this.locationWeather.forecast.forecastday
    }
  },
}
</script>

<style lang="scss">
  .el-tabs__nav-scroll {
    display: flex;
    justify-content: center;
  }
</style>