<template>
    <div>
      <div>
        <van-card v-for="item in goods" :key="item.id" tag="标签" :price="item.price" :desc="item.desc" :title="item.name" :thumb="item.image" :origin-price="item.originPrice">
          <div slot="footer">
            <!--<van-button size="small" @click="toGoods(item)">商品详情</van-button>-->
            <!--<van-button size="mini">按钮</van-button>-->
          </div>
        </van-card>
      </div>
      <div class="footer">
        <van-submit-bar
          :price="3050"
          button-text="提交订单"
          @submit="onSubmit"
        >
          <van-checkbox v-model="checked">全选</van-checkbox>
          <span slot="tip">
          你的收货地址不支持同城送, <span>修改地址</span>
        </span>
        </van-submit-bar>
      </div>
    </div>
</template>

<script>
import { Card, SubmitBar, Checkbox, Button } from 'vant'
export default {
  name: 'cart',
  components: {
    /*eslint-disable*/
    [Card.name]: Card,
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    [Button.name]: Button
    /*eslint-disable*/
  },
  data () {
    return {
      checked: true,
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
        }
      ]
    }
  },
  methods: {
    onSubmit: function () {

    }
  }
}
</script>

<style scoped lang="less">
.footer {
  padding-bottom: 20px;
}
</style>
