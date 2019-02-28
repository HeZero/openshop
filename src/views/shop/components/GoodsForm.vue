<template>
  <div>
    <div>
        <van-card v-for="item in goods" :key="item.id" tag="标签" :price="item.price" :desc="item.desc" :title="item.name" :thumb="item.image" :origin-price="item.originPrice">
          <div slot="footer">
            <van-button size="small" @click="toGoods(item)">商品详情</van-button>
            <!--<van-button size="mini">按钮</van-button>-->
          </div>
        </van-card>
    </div>
  </div>
</template>

<script>
import { Card, Button } from 'vant'
export default {
  name: 'GoodsForm',
  components: {
    /* eslint-disable */
    [Card.name]: Card,
    [Button.name]: Button
    /* eslint-disable */
  },
  data () {
    return {
      goods: [
        {
          'id': '1',
          'name': '衬衫',
          'price': '10.00',
          'desc': '美特斯邦威T恤',
          'originPrice': '20.00',
          'key': [],
          'image': 'http://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg',
          'number': 10,
        },
        {
          'id': '2',
          'name': '衬衫',
          'price': '20.00',
          'desc': '美特斯邦威T恤2',
          'originPrice': '30.00',
          'image': 'http://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg',
          'key': [],
          'number': 2,
        },
        {
          'id': '3',
          'name': '衬衫',
          'price': '20.00',
          'desc': '美特斯邦威T恤2',
          'originPrice': '30.00',
          'image': 'http://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg',
          'key': [],
          'number': 2,
        },
        {
          'id': '4',
          'name': '衬衫',
          'price': '20.00',
          'desc': '美特斯邦威T恤2',
          'originPrice': '30.00',
          'image': 'http://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg',
          'key': [],
          'number': 2,
        },
        {
          'id': '5',
          'name': '衬衫',
          'price': '20.00',
          'desc': '美特斯邦威T恤2',
          'originPrice': '30.00',
          'image': 'http://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg',
          'key': [],
          'number': 2,
        }
      ]
    }
  },
  methods: {
    toGoods: function (item) {
      this.$router.push({name: 'goods', params: {goods: item}})
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../../theme/public.less";

  .layout {
    display: flex;
    flex-direction: column;
    height: 100%;

    .main {
      flex: 1;
      overflow-y: scroll;
    }
  }
</style>
