<template>
  <div class="current-weather text-center">
    <div class="weather">
      <slot name="name" class="name"></slot>
      <img v-if="iconSrc" :src="iconSrc" />
      <slot name="temp" class="temp_curr">c</slot>
      <slot name="temp_feel"  class="temp_feel"></slot>
      <slot name="text" class="w_condition"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'simpleLocationWeather',
  props:{
    iconSrc:{
      type: String
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
  .current-weather {
    text-align: center;
  .temp_curr{
    font-size: 1.5em;
    font-weight: 600;

  }
  .temp_feel{
    font-size: 0.8em;
  }
  .w_condition{
    font-size: 0.9em;
    font-weight: 500;
  }
  }
</style>