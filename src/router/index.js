import Vue from 'vue'
import VueRouter from 'vue-router'
import ying from '../views/hersolist/ying.vue'
import wuqi from '../views/wu/wuqi.vue'
import zhang from '../views/zhang/zhang.vue'

// 添加页面
import Tianadd from '../views/hersolist/tianadd.vue'

// 编辑页面
import Xiugai from '../views/hersolist/xiugai.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  // 高亮显示
  linkActiveClass: 'active',
  routes: [
    { name: 'home', path: '/', redirect: 'hersolist' },
    { name: 'ying', path: '/hersolist', component: ying },
    { name: 'wuqi', path: '/wu', component: wuqi },
    { name: 'zhang', path: '/zhang', component: zhang },
    { name: 'Tianadd', path: '/hersolist/tianadd', component: Tianadd },
    { name: 'Xiugai', path: '/hersolist/xiugai', component: Xiugai, props: true }
  ]
})
export default router
