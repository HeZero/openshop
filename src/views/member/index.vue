<template>
    <div class="member">
      <div class="header">
        <div class="image-box">
          <img class="image" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545911830759&di=4a6caed4f5dd3b8add953661a166d4d3&imgtype=0&src=http%3A%2F%2Fpic159.nipic.com%2Ffile%2F20180330%2F12253192_162416159000_2.jpg" alt="">
        </div>
        <div class="name-box">
          捡破烂的王老五
        </div>
      </div>
      <div class="tab">
        <van-tabbar v-model="active" class="tab-box" :fixed="false">
          <!--eslint-disable-->
          <van-tabbar-item v-for="(item, index) in tabList" :key="item.id" v-bind:icon="item.icon" v-on:click="showInfo">{{item.name}}</van-tabbar-item>
          <!--eslint-disable-->
        </van-tabbar>
        <van-cell-group>
           <van-cell title="全部订单" is-link icon="description" @click="to('order')"/>
        </van-cell-group>
      </div>
      <div class="main">
        <van-cell-group class="cell-margin-top">
          <van-cell title="收藏的商品" is-link icon="star-o" @click="to('collection')"/>
          <van-cell title="收藏的店铺" is-link icon="shop-collect-o" @click="to('collection')"/>
          <van-cell title="我买过的" is-link icon="bag-o" @click="showInfo"/>
          <van-cell title="我的浏览记录" is-link icon="browsing-history-o" @click="showInfo"/>
        </van-cell-group>

        <van-cell-group class="cell-margin-top">
          <van-cell title="我的会员卡" is-link icon="vip-card-o" @click="to('vip')"/>
          <van-cell title="我的返现" is-link icon="refund-o" @click="to('back')"/>
        </van-cell-group>

        <van-cell-group class="cell-margin-top">
          <van-cell title="收货地址管理" is-link icon="setting-o" @click="to('address')"/>
          <van-cell title="联系客服" is-link icon="question-o" @click="to('help')"/>
        </van-cell-group>
      </div>
    </div>
</template>

<script>
import { Tabbar, TabbarItem, Cell, CellGroup } from 'vant'
export default {
  name: 'member',
  components: {
    /* eslint-disable */
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell
    /* eslint-disable */
  },
  data () {
    return {
      active: -1,
      tabList: [
        {
          'id': 1,
          'name': '待付款',
          'link': 'shop',
          'icon': 'pending-payment'
        },
        {
          'id': 2,
          'name': '待接单',
          'link': 'portal',
          'icon': 'notes-o'
        },
        {
          'id': 3,
          'name': '待发货',
          'link': 'member',
          'icon': 'tosend'
        },
        {
          'id': 4,
          'name': '待收货',
          'link': 'member',
          'icon': 'logistics'
        },
        {
          'id': 5,
          'name': '退款/维权',
          'link': 'member',
          'icon': 'after-sale'
        }
      ]
    }
  },
  methods: {
    to (name) {
      this.$router.push(name)
    },
    showInfo () {
      this.$toast('功能还在开发中,敬请期待')
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../theme/public.less";
  .member {
       background: #F8F8F8;
       overflow-y: scroll;
      .header {
        height: 15%;
        background: #E94B4B;
        display: flex;
        flex-direction: row;
        .image-box {
          height: 60px;
          width: 60px;
          padding: 20px;
          .image {
            height: 100%;
            width: 100%;
            border-radius: 100%;
          }
        }
        .name-box {
          padding: 40px 0;
          font-weight: bold;
          color: #F8F8F8;
        }
      }
      .tab {
        height: 18%;

        .tab-box {
          height: 60%;
        }
      }
      .main {
        height: 67%;
        background: #F8F8F8;
      }

    .cell-margin-top {
      margin-top: 10px;
    }
  }
</style>
