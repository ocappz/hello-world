import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import * as echarts from 'echarts'
import 'echarts-liquidfill'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(ElementUI);

window.Office.onReady(() => {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
});
