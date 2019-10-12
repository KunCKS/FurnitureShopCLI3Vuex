<template>
  <div>
    <products-header :productsHeaderData="productsHeaderData"></products-header>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-8 py-3">
          <div class="text-center h3 text-muted border-bottom py-3 promotion-title">
            <i class="far fa-question-circle"></i> 常見問題
          </div>
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                  >運送方式</button>
                </h2>
              </div>

              <div id="collapseOne" class="collapse" data-parent="#accordionExample">
                <div class="card-body">由於商品體積過大，故皆以合作的貨物物流進行配合運送，敬請耐心等待。</div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                  >付款方式</button>
                </h2>
              </div>
              <div id="collapseTwo" class="collapse" data-parent="#accordionExample">
                <div class="card-body">目前提供信用卡付款及超商繳費兩種方式。</div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                  >會員優惠</button>
                </h2>
              </div>
              <div id="collapseThree" class="collapse" data-parent="#accordionExample">
                <div class="card-body">年度消費額度達到10萬元以上將升等為VIP會員，享有更優惠的價格，詳請請關注官網資訊！</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsHeader from '../components/ProductsHeader'
export default {
  data () {
    return {
      productsHeaderData: {
        title: '常見問題',
        imgUrl:
          'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80'
      }
    }
  },
  components: {
    ProductsHeader
  }
}
</script>
