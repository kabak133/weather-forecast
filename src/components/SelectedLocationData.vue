<template>
  <div class="selected-loc">
    <el-card class="box-card">
      <div class="name">
        {{currentLocation.name}}
      </div>
      <div class="region">
        {{currentLocation.region}}
      </div>
      <div class="country">
        {{currentLocation.country}}
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  name: 'SelectedLocationData',
  props:{
    currentLocation:{
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.box-card{
  width: 480px;
  max-width: 100%;
  margin: 0 auto 25px;
  font-size: 1.6rem;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.5;
  .name{
    font-size: 1.25em;
  }
}
</style>