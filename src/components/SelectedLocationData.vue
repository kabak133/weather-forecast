<template>
  <div class="selected-loc">
    <el-card class="box-card">
      <span
          @click="addFavorite"
          class="save">Add to favorites <i class="el-icon-star-on"></i></span>
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
  },
  methods:{
    addFavorite(){
      this.$store.dispatch('searchLocate/addToFavoriteLocation')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/scss/varitable";

  .box-card{
  width: 480px;
  max-width: 100%;
  margin: 0 auto 25px;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.5;
  position: relative;
  .name{
    font-size: 1.25em;
  }
  .save{
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 1rem;
    border-bottom: 1px dashed $back;
    line-height: 1;
    cursor: pointer;
    &:hover{
      color: $accent-color;
      border-bottom-color: $accent-color;
    }
  }
}
</style>