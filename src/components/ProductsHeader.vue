<template>
  <div
    class="text-center py-6 px-4"
    :class="{
    'bg-img-show': productsHeaderData.imgUrl,
    'd-flex': productsHeaderData.imgUrl,
    'flex-column':productsHeaderData.imgUrl,
    'justify-content-center': productsHeaderData.imgUrl,
    'align-items-center':productsHeaderData.imgUrl,
    'text-white':productsHeaderData.imgUrl,
  }"
    :style="`background-color: ${productsHeaderData.bgColor};background-image: url(${productsHeaderData.imgUrl})`"
  >
    <h1 class="h2" :class="{'mb-4':!productsHeaderData.imgUrl,}">{{productsHeaderData.title}}</h1>
    <p>{{productsHeaderData.content}}</p>
  </div>
</template>

<script>
export default {
  props: ['productsHeaderData']
}
</script>
<style lang="scss">
.bg-img-show {
  background-size: cover;
  background-position: center 75%;
  height: 40vh;
}
</style>
