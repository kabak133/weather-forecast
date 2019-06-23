<template>
  <div class="favorite-wp">
    <h3>Favorite Location</h3>
    <el-card class="box-card mb-3"
             v-for="(itm, key) in favoriteLocation"
             :key="key"
    >

      <simple-location-weather
          :icon-src="itm.current.condition.icon">
        <div slot="name"><b>{{itm.location.name}}</b></div>
        <div slot="temp">{{itm.current.temp_c}}°c</div>
        <div slot="temp_feel">Feels like {{itm.current.feelslike_c}}°c</div>
      </simple-location-weather>
    </el-card>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import simpleLocationWeather from '@/slots/simpleLocationWeather'

export default {
  name: 'FavoriteLocations',
  components: {
    simpleLocationWeather
  },
  computed:{
    ...mapGetters({
      favoriteLocation: 'searchLocate/getFavoriteLocation'
    })
  },
  data () {
    return {
      favorites: {}
    }
  }
}
</script>

<style lang="scss">
  .el-card__body{
    padding: 10px;
  }
  .favorite-wp{
    h3{
      text-align: center;
    }
  }
</style>