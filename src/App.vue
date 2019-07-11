<template>
  <div id="app">
    <!-- 一级路由 -->
    <ding></ding>
    <cebian></cebian>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入样式表
import ding from './components/ding'
import cebian from './components/cebian'
export default {
  name: 'app',
  components: {
    ding,
    cebian
  }
}
</script>

<style lang="less">

</style>
