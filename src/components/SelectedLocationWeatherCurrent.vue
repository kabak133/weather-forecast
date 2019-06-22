<template>
  <div class="current-weather text-center">

    <div class="weather">
      <img :src="weatherData.condition.icon"/>
      <div class="temp_curr">{{weatherData.temp_c}}°c</div>
      <div class="temp_feel">Feels like {{weatherData.feelslike_c}}°c</div>
      <div class="w_condition">{{weatherData.condition.text}} </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SelectedLocationSimple',
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