<template>
  <div class="hello">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <div ref="fillLiquid" style="height: 400px;width: 400px"></div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{

    }
  },
  methods: {
    drawFillLiquid(){
      const option = {
        series: [{
          type: 'liquidFill',
          data: [0.5, 0.4, 0.3],
          color: ['red', '#0f0', 'rgb(0, 0, 255)'],
          itemStyle: {
            opacity: 0.6
          },
          emphasis: {
            itemStyle: {
              opacity: 0.9
            }
          }
        }]
      };

      const dom = this.$refs.fillLiquid;
      const myChart = this.$echarts.init(dom);
      myChart.setOption(option)
    }
  },
  mounted() {
    this.drawFillLiquid()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
