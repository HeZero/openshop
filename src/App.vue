<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  @import "./theme/public.less";
  #app {
    height: 100%;
    overflow: hidden;
    font-size: @size;
  }
</style>
