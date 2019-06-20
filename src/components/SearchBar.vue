<template>
  <div class="search-bar">
    <el-input
      placeholder="Please input ex.: Odessa ua"
      v-model="searchValue"
      class="input-with-select"
    >
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'SearchPlace',
  data() {
    return {
      searchValue: ''
    };
  }
};
</script>

<style scoped></style>
