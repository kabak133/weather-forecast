<template>
  <div class="weather-period">
    <div class="row justify-content-around">
      <div class="col-lg col-md-4 p-2"
           v-for="item in weatherForecast"
          :key="item.date_epoch">
        <el-card shadow="hover" class="mb-4 simple-day">
          <div class="date">
            <div class="day">{{item.date | formatDay('dddd')}}</div>
            <div class="day-disc">{{item.date | formatDay('DD')}}</div>
            <div class="month">{{item.date | formatDay('MMM')}}</div>

          </div>

          <img :src="item.day.condition.icon" alt="icon-weather">

          <div class="avg">{{item.day.avgtemp_c}}°c</div>
          <div class="row min-max">
            <div class="col-6 p-1">
              <div class="mb-2">Min: <br> {{item.day.mintemp_c}}°c</div>
            </div>
            <div class="col-6 p-1">
              <div class="mb-2">Max: <br> {{item.day.maxtemp_c}}°c</div>
            </div>
          </div>




        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectedLocationWeatherPeriod',
  props:{
    weatherForecast:{
      type: Array,
      require: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
  .simple-day{
    text-align: center;
    .avg{
      font-size: 2rem;
      font-weight: 600;
    }
    .min-max{
      font-size: 1.4rem;
    }

  }
  .date{
    font-size: 1.4rem;
    .day-disc{
      font-size: 1.4em;
      font-weight: 600;
    }
  }

</style>

<style lang="scss">
  @media all and (max-width: 1199px){
    .simple-day{
      .el-card__body{
        padding: 10px;
      }
      .min-max{
        margin-right: -10px;
        margin-left: -10px;
        & > div:first-child{
          text-align: right;
        }
        & > div:last-child{
          text-align: left;
        }
      }

    }
  }
</style>