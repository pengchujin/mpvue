<template>
  <div>
    <div>
      <ul id="example-1">
      <li v-for="item in test" :key="item" >
        {{ item.heading.title }}
        {{ item.heading.subtitle }}
      </li>
      </ul>
    </div>
  </div>
</template>

<script>
// this.$http.get("https://www.shazam.com/charts/top-200/united-states").then((d)=>{
//       //输出请求数据
//       console.log(d.data)
//       //输出响应头
//       console.log(d.header)
//     }).catch(err=>{
//       console.log(err.status,err.message)
//     })
export default {
  data () {
    return {
      test: []
    }
  },
  mounted () {
    console.log('Mouted')
    this.$http.get('https://sebs.qust.me/shazam/v2/en-US/US/web/-/tracks/country-chart-US?pageSize=200&startFrom=0').then((d) => {
      this.test = d.data.chart
      console.log(d.data)
      console.log(d.header)
    }).catch(err => {
      console.log(err.status, err.message)
    })
  },
  methods: {},
  created () {
  }
}
</script>

<style scoped>

</style>
