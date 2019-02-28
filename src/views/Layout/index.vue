<template>
  <div class="layout">
    <keep-alive>
      <router-view class="main"/>
    </keep-alive>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  name: 'layout',
  components: {
    Footer
  }
}
</script>

<style scoped lang="less">
  @import "../../theme/public.less";

  .layout {
    display: flex;
    flex-direction: column;
    height: 100%;

    .main {
      flex: 1;
      height: 94%;
    }
    .footer {
      height: 6%;
    }
  }
</style>
