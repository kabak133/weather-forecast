<template>
  <div class="search-bar mb-5">
    <el-input
        placeholder="Please input ex.: Odessa ua"
        v-model="searchValue"
        class="input-with-select"
        @input="autocomplete(searchValue)"
        @keyup.enter.native="chooseLocation(searchValue)"
    >
      <el-button
          slot="append"
          icon="el-icon-search"
          @click="chooseLocation(searchValue)"></el-button>
    </el-input>
    <div class="result-autocomplete"
         v-click-outside="outside"
         v-show="getSearchResult.length">
      <ul>
        <li v-for="item in getSearchResult"
            @click.stop="chooseLocation(item.name)"
            :key="item.id">
          {{item.name}}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'SearchPlace',
  data () {
    return {
      searchValue: '',
      debounceAutocomplete: null
    }
  },
  computed: {
    ...mapGetters({
      getSearchResult: 'searchLocate/getSearchResult',
      locationWeather: 'weather/getLocationWeather',
    })
  },
  watch:{
    locationWeather: {
      handler: function (val, oldVal) {
        this.searchValue = ''
      },
      deep: true
    }
  },
  created () {
    this.debounceAutocomplete = this.$_debounce(() => {
      this.$store.dispatch('searchLocate/searchLocations', this.searchValue)
    }, 250)

  },
  methods: {
    outside: function(e) {
      this.$store.dispatch('searchLocate/clearSearchResult')
    },
    autocomplete () {
      if (this.searchValue.length > 2) {
        this.debounceAutocomplete()
      }
    },
    chooseLocation(name){
      this.searchValue = name
      if (name.length > 2) {
        this.$store.dispatch('weather/SelectedLocationWeather',  name)
        this.$store.dispatch('searchLocate/clearSearchResult')
      }

    }
  }

}


</script>

<style scoped lang="scss">
  .search-bar {
    position: relative;
    .result-autocomplete {
      position: absolute;
      left: 0;
      right: 0;
      top: 40px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      z-index: 99;
      background: #fff;
      border: 1px solid #EBEEF5;
      color: #303133;
      transition: all .3s;
      ul{
        font-size: 1.4rem;
        list-style: none;
        padding: 10px 0;
        li{
          padding: 5px 15px;
          &:hover{
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
