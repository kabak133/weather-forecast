<template>
  <div class="search-bar mb-5">
    <el-input
        placeholder="Please input ex.: Odessa ua"
        v-model="searchValue"
        class="input-with-select"
        @keyup.enter.native="searchLocation(searchValue)"
    >
      <el-button
          slot="append"
          icon="el-icon-search"
          @click="searchLocation(searchValue)"></el-button>
    </el-input>
  </div>
</template>

<script>
 import { Input, Button, Tabs } from 'element-ui'

export default {
  name: 'SearchPlace',
  data () {
    return {
      searchValue: ''
    }
  },
  methods:{
    searchLocation(searchValue){
      console.log('searchValue', searchValue)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
