<template>
  <div class="simple-loc text-center">
    <div class="name">
      {{currentLocation.name}}
    </div>
    <div class="region">
      {{currentLocation.region}}
    </div>
    <div class="country">
      {{currentLocation.country}}
    </div>

  </div>
</template>

<script>
export default {
  name: 'SelectedLocationSimple',
  props:{
    weatherData:{
      type: Object,
      required: true
    },
    currentLocation:{
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },

}
</script>

<style scoped>

</style>