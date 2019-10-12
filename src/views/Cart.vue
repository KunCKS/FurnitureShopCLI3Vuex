<template>
  <div class="container pt-md-3 pb-md-5 section-full-height">
    <loading :active.sync="isLoading"></loading>
    <div class="row">
      <!--    左側購物清單    -->
      <div class="col-md-7">
        <div class="h4 text-center">購 物 車 清 單</div>
        <table class="table" v-if="cartData.carts.length >= 1">
          <thead>
            <th width="25"></th>
            <th colspan="2">品名</th>
            <th width="90" class="d-md-table-cell d-none">單價</th>
            <th width="75" class="text-center">數量</th>
            <th width="90">小計</th>
          </thead>
          <tbody>
            <tr v-for="item in cartData.carts" :key="item.id">
              <td class="align-middle">
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm border-0"
                  @click="removeCartItem(item.id)"
                >
                  <i class="far fa-trash-alt" v-if="product_id !== item.id"></i>
                  <i class="fas fa-spinner fa-spin" v-if="product_id === item.id"></i>
                </button>
              </td>
              <td width="42" class="align-middle">
                <div
                  class="bg-cover"
                  :style="`background-image:url('${item.product.imageUrl}');width: 42px;height:42px`"
                ></div>
              </td>
              <td class="align-middle">
                <div class="text-muted">
                  <span class="d-md-inline-block d-none">{{item.product.category_series}}</span>
                  {{item.product.title}}
                </div>
              </td>
              <td class="align-middle text-right d-md-table-cell d-none">
                <span class="text-success">{{item.product.price|currency}}</span>
                <del class="text-muted">{{item.product.origin_price|currency}}</del>
              </td>
              <td class="align-middle text-center">
                <div class>{{item.qty}}/{{item.product.unit}}</div>
              </td>
              <td class="align-middle text-right">
                <span class>{{item.product.price * item.qty |currency}}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="py-6 text-center border-top border-bottom" v-if="cartData.carts.length < 1">
          <div class="h5">購物車沒有商品喔！</div>
          <router-link class="btn btn-primary mt-3" to="/products">繼續購物</router-link>
        </div>
      </div>
      <!--    右側購物小計    -->
      <div class="col-md-5 my-md-0 my-2">
        <div class="border p-3 shadow">
          <div class="h5 text-center border-bottom pb-2">購 物 車 合 計</div>
          <div class="d-flex py-2">
            <h6>總計</h6>
            <span class="ml-auto" v-if="cartData.total">{{cartData.total|currency}}</span>
          </div>
          <div class="d-flex py-2" v-if="cartData.final_total < cartData.total">
            <div class="d-flex">
              <h6>折扣價</h6>
              <small class="text-success">(已套用coupon優惠)</small>
            </div>
            <span class="ml-auto text-success">{{cartData.final_total|currency}}</span>
          </div>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="請輸入優惠碼"
              v-model="couponCode"
              @keyup.enter="useCoupon"
              style="font-size:0.875rem"
            />
            <div class="input-group-append">
              <button
                class="btn btn-sm btn-outline-primary"
                type="button"
                id="button-addon2"
                @click="useCoupon"
              >套用優惠碼</button>
            </div>
          </div>
          <small class="ml-auto text-success py-1 d-block mb-3">
            <span v-if="cartData.final_total >= cartData.total">現在輸入OPEN50OFF即可享有折扣價喔!</span>
          </small>
          <router-link
            class="btn btn-outline-success btn-block"
            :class="{'disabled':cartData.carts.length < 1}"
            to="/CustomerOrder"
          >前往結帳</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      couponCode: '' // 綁定使用者輸入的coupon
    }
  },
  methods: {
    // 刪除購物車中的資料
    removeCartItem (id) {
      this.$store.dispatch('removeCartItem', id)
    },
    // 使用coupon折扣
    useCoupon () {
      this.$store.dispatch('useCoupon', this.couponCode)
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    cartData () {
      return this.$store.state.cartData
    },
    product_id () {
      return this.$store.state.product_id
    }
  },
  created () {
    this.$store.dispatch('getCartData') // 更新購物車資料
  }
}
</script>
