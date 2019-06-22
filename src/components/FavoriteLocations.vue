<template>
  <div class="favorite-wpp">
    <el-card class="box-card">

      <simple-location-weather
          v-for="itm in ttt"
          :weather-data="itm"
          :key="itm.id"
          :icon-src="itm.condition.icon">
        <div slot="name">{{itm.name}}</div>
        <div slot="temp">{{itm.temp_c}}°c</div>
        <div slot="temp_feel">Feels like {{itm.feelslike_c}}°c</div>

      </simple-location-weather>

    </el-card>

  </div>
</template>

<script>

import simpleLocationWeather from '@/slots/simpleLocationWeather'

export default {
  name: 'FavoriteLocations',
  components: {
    simpleLocationWeather
  },
  data () {
    return {
      ttt: [
        {
          id:1,
          condition: {icon:'http://cdn.apixu.com/weather/64x64/night/116.png'},
          temp_c: 99,
          feelslike_c: 89,
          text: 'Partly cloudy',
          name: 'ODESSS'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .el-card__body{
    padding: 10px;
  }
</style>