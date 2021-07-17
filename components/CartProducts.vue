<template>
  <div class="cart__content">
    <div class="cart__products-title">
      Товары в корзине
    </div>
    <div class="cart__products">
      <div class="cart__product" v-for="product in products" :key="product.id"
           v-if="product.id">
        <img src="~assets/icons/remove.svg" alt="" class="cart__product-remove" @click="removeFromCart(product)">
        <div class="cart__product-image-wrapper">
          <img :src="`https://frontend-test.idaproject.com${product.photo}`" alt="" class="cart__product-image">
        </div>
        <div class="cart__product-content">
          <div class="cart__product-name"> {{ product.name }}</div>
          <div class="cart__product-price">{{ product.price }} P</div>
          <div class="cart__product-rating"> {{ product.rating }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartProducts",
  computed: {
    products() {
      return this.$store.getters['cart/products']
    }
  },
  methods: {
    removeFromCart(product) {
      this.$store.commit('cart/removeProduct', product)
    }
  }
}
</script>

<style scoped lang="scss">
  .cart {
    &__products-title {
      margin-bottom: 16px;
    }

    &__products {
      display: flex;
      flex-wrap: wrap;
    }

    &__product {
      position: relative;
      display: flex;
      width: 100%;
      padding: 12px 64px 16px 25px;
      margin-bottom: 12px;
      background: #FFFFFF;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
    }

    &__product-remove {
      position: absolute;
      top: calc(50% - 11px);
      right: 22px;
      width: 20px;
      height: 22px;
      cursor: pointer;
    }

    &__product-image-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70px;
      height: 90px;
    }

    &__product-image {
      max-height: 100%;
      max-width: 100%;
    }

    &__product-content {
      margin-left: 34px;
    }

    &__product-name {
      margin-bottom: 6px;
      font-size: 14px;
      line-height: 18px;
      color: #59606D;
    }

    &__product-price {
      margin-bottom: 19px;
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
      color: #1F1F1F;
    }

    &__product-rating {
      position: relative;
      font-weight: bold;
      font-size: 10px;
      line-height: 13px;
      padding-left: 18px;
      color: #F2C94C;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 14px;
        height: 14px;
        background-image:  url('~assets/icons/star.svg');
      }
    }
  }
</style>
