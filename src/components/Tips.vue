<template>
  <div class="tips">

    <div v-if="showMore">
      <div v-for="item in tips" :key="item.name" class="tips-more" v-bind:class="{show: showMore}">
        <van-icon :name="item.name" @click="to(item.link)" />
      </div>
    </div>

    <div>
      <div class="tips-item" @click="animate">
        <van-icon name="plus" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tips',
  data () {
    return {
      showMore: false,
      tips: [
        {
          'name': 'shopping-cart-o',
          'link': 'cart'
        },
        {
          'name': 'like-o',
          'link': 'like'
        }
      ]
    }
  },
  methods: {
    animate: function (event) {
      let el = event.currentTarget
      if (!this.showMore) {
        el.style.transform = 'rotate(45deg)'
        el.style.background = '#6D6D6D'
        el.style.color = '#FFFFFF'
      } else {
        el.style.transform = 'rotate(0deg)'
        el.style.background = '#FFFFFF'
        el.style.color = '#9A9A9A'
      }
      this.showMore = !this.showMore
    },
    to: function (name) {
      this.$router.push(name)
    }
  }
}
</script>

<style scoped lang="less">
  .tips {
    position: fixed;
    width: 40px;
    height: auto;
    right: 20px;
    bottom: 70px;
    .tips-item {
      transition: background 1s ;
      transition: transform 0.1s ;
      width: 40px;
      height: 40px;
      font-size: 22px;
      text-indent: 3px;
      line-height: 42px;
      border-radius: 100%;
      background: #FFFFFF;
      color: #9A9A9A;
      box-shadow: 0 0 4px #9A9A9A;
    }
    .tips-more {
      width: 40px;
      height: 40px;
      margin-bottom: -40px;
      font-size: 22px;
      text-indent: 3px;
      line-height: 42px;
      border-radius: 100%;
      background: #FFFFFF;
      color: #9A9A9A;
      box-shadow: 0 0 4px #9A9A9A;
    }
    @keyframes show
    {
      from {margin-bottom: -40px;}
      to {margin-bottom: 5px;}
    }

    @-moz-keyframes show /* Firefox */
    {
      from {margin-bottom: -40px;}
      to {margin-bottom: 5px;}
    }

    @-webkit-keyframes show /* Safari 和 Chrome */
    {
      from {margin-bottom: -40px;}
      to {margin-bottom: 5px;}
    }

    @-o-keyframes show /* Opera */
    {
      from {margin-bottom: -40px;}
      to {margin-bottom: 5px;}
    }

    .show {
      animation: show 0.5s;
      -moz-animation: show 0.5s;/* Firefox */
      -webkit-animation: show 0.5s;/* Safari 和 Chrome */
      -o-animation: show 0.5s;/* Opera */
      margin-bottom: 5px;
    }
  }

</style>
