<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <search-bar />
          <div class="selected-place">
            data
            <br />
            data
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar';
export default {
  name: 'app',
  components: {
    SearchBar
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#app {
}
</style>
