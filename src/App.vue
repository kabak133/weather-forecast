<template>
  <div id="app">
    <div class="container">
      <div class="row mx-5">
        <div class="col-md-9">
          <search-bar/>
          <selected-location/>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import SelectedLocation from './components/SelectedLocation'

export default {
  name: 'app',
  components: {
    SelectedLocation,
    SearchBar
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  #app {}
</style>
