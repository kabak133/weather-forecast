<template>
  <div class="wrp-selected-location mb-5">
    <el-tabs type="border-card">
      <el-tab-pane label="Current">
        <selected-location-simple
            v-if="currentLocationWeather"
            :weather-data="currentLocationWeather"
            :current-location="currentLocation"
        />
      </el-tab-pane>
      <el-tab-pane label="7 Day Forecast">7 Day Forecast</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SelectedLocationSimple from './SelectedLocationSimple'

export default {
  name: 'SelectedLocation',
  components: {
    SelectedLocationSimple
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      locationWeather: 'weather/getLocationWeather',
    }),
    currentLocationWeather(){
      return this.locationWeather.current
    },
    currentLocation(){
      return this.locationWeather.location
    }
  },
}
</script>

<style scoped>

</style>