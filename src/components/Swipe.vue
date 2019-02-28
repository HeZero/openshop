<template>
<div class="swipe">
  <van-swipe class="image-box" :autoplay="swipe.interval" indicator-color="white">
      <!--eslint-disable-->
      <van-swipe-item v-for="(item, index) in swipe.images" :key="item.id" @click="to(item.alink)">
        <img class="image" :src="item.url" alt="">
      </van-swipe-item>
      <!--eslint-disable-->
  </van-swipe>
</div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
export default {
  name: 'Swipe',
  components: {
    /* eslint-disable */
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
    /* eslint-disable */
  },
  props: {
    swipe: {
      interval: 3000,
      images: []
    }
  },
  methods: {
    to (alink) {
      alert(alink)
    }
  }
}
</script>

<style scoped lang="less">
  .swipe {
    .image-box {
      height: 100%;
      .image {
        height: 100%;
        width: 100%;
      }
    }
  }
</style>
