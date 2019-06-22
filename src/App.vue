<template>
  <div id="app">
    <div class="container">
      <div class="row mx-5">
        <div class="col-lg-10">
          <search-bar/>
          <selected-location/>
        </div>
        <div class="col-lg-2">
          <favorite-locations/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import SelectedLocation from './components/SelectedLocation'
import FavoriteLocations from './components/FavoriteLocations'

export default {
  name: 'app',
  components: {
    SelectedLocation,
    SearchBar,
    FavoriteLocations
  },
  data () {
    return {}
  },
  beforeCreate () {

  }
}
</script>

<style lang="scss">
  #app {
    padding-top: 50px;
  }
</style>
