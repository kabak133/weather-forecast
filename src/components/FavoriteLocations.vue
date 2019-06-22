<template>
  <div class="favorite-wpp">
    <el-card class="box-card">
      <item-favorite
          v-for="itm in ttt"
          :weather-data="itm"
          :key="itm.id"/>
    </el-card>

  </div>
</template>

<script>

import SelectedLocationWeatherCurrent from '../components/SelectedLocationWeatherCurrent'

export default {
  name: 'FavoriteLocations',
  components: {
    itemFavorite: SelectedLocationWeatherCurrent
  },
  data () {
    return {
      ttt: [
        {
          id:1,
          condition: {icon:'http://cdn.apixu.com/weather/64x64/night/116.png'},
          temp_c: 99,
          feelslike_c: 89,
          text: 'Partly cloudy'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>