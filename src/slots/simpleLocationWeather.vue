<template>
  <div class="current-weather text-center">
    <div class="weather">
      <div class="name">
        <slot name="name"></slot>

      </div>
      <img v-if="iconSrc" :src="iconSrc"/>
      <div class="temp_curr">
        <slot name="temp"></slot>
      </div>
      <div class="temp_feel">
        <slot name="temp_feel"></slot>
      </div>
      <div class="w_condition">
        <slot name="text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'simpleLocationWeather',
  props: {
    iconSrc: {
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
    .temp_curr {
      font-size: 1.5em;
      font-weight: 600;

    }
    .temp_feel {
      font-size: 0.8em;
    }
    .w_condition {
      font-size: 0.9em;
      font-weight: 500;
    }
  }
</style>