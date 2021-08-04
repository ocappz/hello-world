import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import * as echarts from 'echarts'
import 'echarts-liquidfill'
import msal from 'vue-msal'

Vue.prototype.$echarts = echarts

Vue.use(ElementUI);

Vue.use(msal, {
    auth: {
        clientId: 'a120a123-4433-457e-a562-3bd4ffea8d92'
    },
    framework: {
        globalMixin: true
    }
});


Vue.config.productionTip = false

window.Office.onReady(() => {
    new Vue({
        render: h => h(App),
    }).$mount('#app')
});
