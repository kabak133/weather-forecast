<template>
  <div class="favorite-wp">
    <h3>Favorite Location</h3>
    <transition-group name="list" tag="p">
      <el-card class="box-card-favorite mb-3"
               v-for="(itm, key) in favoriteLocation"
               :key="itm.location + key"
               @click.native="chooseLocation(key)"
      >
        <simple-location-weather
            :icon-src="itm.current.condition.icon">
          <div slot="name"><b>{{itm.location.name}}</b></div>
          <div slot="temp">{{itm.current.temp_c}}°c</div>
          <div slot="temp_feel">Feels like {{itm.current.feelslike_c}}°c</div>
        </simple-location-weather>
        <i class="el-icon-close del" @clickю.stop="deleteLocation(key)"></i>
      </el-card>
    </transition-group>
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
  computed: {
    ...mapGetters({
      favoriteLocation: 'favoriteLocations/getFavoriteLocation'
    })
  },
  data () {
    return {
      favorites: {}
    }
  },
  created () {
    this.$store.dispatch('favoriteLocations/setFirstData')
  },
  methods: {
    deleteLocation (key) {
      this.$store.dispatch('favoriteLocations/deleteFavoriteLocation', key)
    },
    chooseLocation (key) {
      this.$store.dispatch('weather/SelectedLocationWeather', key)
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/varitable";

  .box-card-favorite {
    position: relative;
    cursor: pointer;
    &.el-card.is-always-shadow {
      &:hover {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
      }
    }

    .del {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 15px;
      height: 15px;
      border-radius: 15px;
      font-size: 10px;
      text-align: center;
      line-height: 15px;
      font-weight: 700;
      background: $back;
      color: #fff;
      opacity: 0.8;
      &:hover {
        background: $accent-color;

      }
    }
  }

  .el-card__body {
    padding: 10px;
  }

  .list-item {
    display: inline-block;
    margin-right: 10px;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .favorite-wp {
    h3 {
      text-align: center;
      font-size: 1.6rem;
    }
  }
</style>