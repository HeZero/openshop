<template>
   <div class="goods">
     <div class="main">
       <Swipe class="header" :swipe="swipe"></Swipe>
       <van-cell-group>
         <van-cell>
           <div class="goods-title">美特斯邦威T恤</div>
           <div class="goods-price">￥20.00</div>
         </van-cell>
         <van-cell class="goods-express">
           <van-col class="gray" span="10">运费: 免运费</van-col>
           <van-col class="gray" span="14">剩余: 900</van-col>
         </van-cell>
       </van-cell-group>

       <van-cell-group class="goods-spec">
         <van-cell title="已选  白色xxL(1件),可选服务" is-link v-on:click="chooseSpecify()"></van-cell>
       </van-cell-group>

       <van-cell-group class="goods-address">
          <van-cell title="送至 北京市昌平区西二旗百度大厦" is-link v-on:click="chooseAddress()"></van-cell>
       </van-cell-group>
     </div>
     <van-goods-action class="footer">
       <van-goods-action-mini-btn
         icon="chat-o"
         text="客服"
         @click="to('help')"
       />
       <van-goods-action-mini-btn
         icon="cart-o"
         text="购物车"
         @click="to('cart')"
       />
       <van-goods-action-big-btn
         text="加入购物车"
       />
       <van-goods-action-big-btn
         primary
         text="立即购买"
       />
     </van-goods-action>

     <van-actionsheet v-model="showAddress">
       <van-address-list
         v-model="chosenAddressId"
         :list="addressList"
         add-button-text="确认选择"
         @add="onAdd"
         @edit="onEdit"
       />
     </van-actionsheet>

     <van-sku
       v-model="showSpecify"
       :sku="sku"
       :goods="goods"
       :goods-id="goods.id"
       :hide-stock="sku.hide_stock"
       :custom-stepper-config="customStepperConfig"
       @buy-clicked="onBuyClicked"
       @add-cart="onAddCartClicked"
     />

   </div>
</template>

<script>
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Actionsheet,
  AddressList,
  CellGroup,
  Cell,
  Col,
  Sku
} from 'vant'
import Swipe from '@/components/Swipe'
export default {
  name: 'goods',
  components: {
    Swipe,
    /* eslint-disable*/
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
    [Actionsheet.name]: Actionsheet,
    [AddressList.name]: AddressList,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Col.name]: Col,
    [Sku.name]: Sku
    /* eslint-disable*/
  },
  data () {
    return {
      showAddress: false,
      showSpecify: false,
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
      },
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: '颜色', // skuKeyName：规格类目名称
            v: [
              {
                id: '1', // skuValueId：规格值 id
                name: '红色', // skuValueName：规格值名称
                imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: '2',
                name: '蓝色',
                imgUrl: 'https://img.yzcdn.cn/2.jpg'
              }
            ],
            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          },
          {
            k: '尺寸', // skuKeyName：规格类目名称
            v: [
              {
                id: '1', // skuValueId：规格值 id
                name: 'XL', // skuValueName：规格值名称
              },
              {
                id: '2',
                name: 'XXL'
              }
            ],
            k_s: 's2'
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 100 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '2', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 120 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '2', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 130 // 当前 sku 组合对应的库存
          }
        ],
        price: '1.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: '留言', // 留言名称
            type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: '1' // 是否必填 '1' 表示必填
          },
          {
            // 商品留言
            datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: '留言2', // 留言名称
            type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: '1' // 是否必填 '1' 表示必填
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        id: '11',
        // 商品标题
        title: '测试商品',
        // 默认商品 sku 缩略图
        picture: 'https://img.yzcdn.cn/1.jpg'
      },
      customStepperConfig: {
        // 自定义限购文案
        quotaText: '每次限购xxx件',
        // 自定义步进器超过限制时的回调
        handleOverLimit: (data) => {
          const { action, limitType, quota, quotaUsed } = data;

          if (action === 'minus') {
            Toast('至少选择一件商品');
          } else if (action === 'plus') {
            // const { LIMIT_TYPE } = Sku.skuConstants;
            if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
              let msg = `单次限购${quota}件`;
              if (quotaUsed > 0) msg += `，你已购买${quotaUsed}`;
              Toast(msg);
            } else {
              Toast('库存不够了');
            }
          }
        }
      },
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise((resolve) => {
            setTimeout(() => resolve('https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000);
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placehold配置
        placeholderMap: {
          text: 'xxx',
          tel: 'xxx'
        }
      },
      chosenAddressId: '1',
      addressList: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ]
    }
  },
  watch:{

  },
  methods: {
    chooseAddress: function () {
      this.showAddress = !this.showAddress
    },
    chooseSpecify: function () {
      this.showSpecify = !this.showAddress
    },
    onBuyClicked: function() {

    },
    onAddCartClicked: function () {

    },
    to: function (name) {
      this.$router.push(name)
    }
  }
}
</script>

<style scoped lang="less">
  .goods {
    display: flex;
    flex-direction: column;
    height: 100%;
    .main {
      height: 92%;
      background: #F8F8F8;
      .header {
        height: 55%;
      }
      .goods-title {
        font-size: 16px;
      }
      .goods-price {
        color: rgb(255, 68, 68);
      }
      .goods-express {
        font-size: 12px;
        padding: 5px 15px;
        .gray {
          color: #969799;
        }
      }
      .goods-spec {
        margin-top: 15px;
      }
      .goods-address {
        margin-top: 15px;
      }
    }
    .footer {
      height: 8%;
    }
  }
</style>
