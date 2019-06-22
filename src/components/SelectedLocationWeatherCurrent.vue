<template>
  <div class="current-weather text-center">
    <simple-location-weather :icon-src="weatherData.condition.icon">
      <div slot="temp" class="temp_curr">{{weatherData.temp_c}}°c</div>
      <div slot="temp_feel"  class="temp_feel">Feels like {{weatherData.feelslike_c}}°c</div>
      <div slot="text" class="w_condition">{{weatherData.condition.text}} </div>
    </simple-location-weather>
  </div>
</template>

<script>

import simpleLocationWeather from '../slots/simpleLocationWeather'

export default {
  name: 'SelectedLocationSimple',
  components:{
    simpleLocationWeather
  },
  props: {
    weatherData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },

}
</script>

<style scoped lang="scss">
  .current-weather {
    text-align: center;
    .temp_curr{
      font-size: 1.5em;
      font-weight: 600;

    }
    .temp_feel{
      font-size: 0.8em;
    }
    .w_condition{
      font-size: 0.9em;
      font-weight: 500;
    }
  }
</style>