<template>
    <div class="shop">
      <Swipe class="header" :swipe="swipe"></Swipe>
      <GoodsForm class="main"></GoodsForm>
      <Tips></Tips>
    </div>
</template>

<script>
import Tips from '@/components/Tips'
import Swipe from '@/components/Swipe'
import GoodsForm from '@/views/shop/components/GoodsForm'
export default {
  name: 'shop',
  components: {
    Tips,
    Swipe,
    GoodsForm
  },
  data () {
    return {
      swipe: {
        interval: 3000,
        images: [
          {
            'id': 1,
            'url': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=163455227,1568739873&fm=26&gp=0.jpg',
            'alink': ''
          },
          {
            'id': 2,
            'url': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3326845208,2902812793&fm=26&gp=0.jpg',
            'alink': ''
          },
          {
            'id': 3,
            'url': 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2525165560,1729204198&fm=26&gp=0.jpg',
            'alink': ''
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../theme/public.less";

  .shop {
    .header {
      height: 30%;
    }
    .main {
      height: 70%;
      flex: 1;
      overflow-y: scroll;
    }
  }
</style>
