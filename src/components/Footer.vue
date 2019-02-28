<template>
    <div>
      <van-tabbar v-model="active">
        <!--eslint-disable-->
         <van-tabbar-item v-for="(item, index) in navList" :key="item.id" v-bind:icon="item.icon" v-on:click="changeActive(index)">{{item.name}}</van-tabbar-item>
        <!--eslint-disable-->
      </van-tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'Footer',
  components: {
    /* eslint-disable */
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
    /* eslint-disable */
  },
  data () {
    return {
      active: 0,
      navList: [
        {
          'id': 1,
          'name': '商城',
          'link': 'shop',
          'icon': 'shop-o'
        },
        {
          'id': 2,
          'name': '首页',
          'link': 'portal',
          'icon': 'wap-home'
        },
        {
          'id': 3,
          'name': '个人中心',
          'link': 'member',
          'icon': 'gem-o'
        }
      ]
    }
  },
  watch: {
    active (val) {
      const routeName = this.navList[val].link
      if (routeName) {
        this.$router.push(routeName)
      }
    },
    '$route.name' () {
      this.changeRoute()
    }
  },
  created () {
    this.changeRoute()
  },
  methods: {
    changeActive: function (index) {
      this.$emit('input', index)
    },
    changeRoute: function () {
      const routeName = this.$route.name
      this.navList.forEach((item, i) => {
        if (item.link === routeName) {
          this.active = i
        }
      })
    }
  }
}
</script>

<style scoped lang="less">

</style>
