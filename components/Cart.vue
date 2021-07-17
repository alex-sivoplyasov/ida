<template>
  <div class="cart" v-if="isOpenCart">
    <div class="cart__container">
      <div class="cart__header">
        <div class="cart__title" @click="closeCart">
          Корзина
        </div>
      </div>

      <div class="cart__content">
        <div class="cart__products-title">
          Товары в корзине
        </div>
        <div class="cart__products">
          <div class="cart__product" @click="removeFromCart(product)" v-for="product in products" :key="product.id" v-if="product.id">
            <div class="cart__product-image-wrapper">
              <img :src="`https://frontend-test.idaproject.com${product.photo}`" alt="" class="cart__product-image">
            </div>
            <div class="cart__product-content">
              <div class="cart__product-name"> {{product.name}}</div>
              <div class="cart__product-price">{{product.price}} P</div>
              <div class="cart__product-rating"> {{product.rating}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    products() {
      console.log('------get-------------', this.$store.getters['cart/products'])
      return this.$store.getters['cart/products']
    },
    // sum() {
    //   let sum = 0
    //
    //   Object.keys(this.products).forEach( (productId) => {
    //     console.log('---pr----', this.products[productId].price)
    //     if(this.products[productId].price)
    //       sum = sum + this.products[productId].price
    //   })
    //
    //   return sum
    // },
    isOpenCart() {
      console.log(this.$store.getters['cart/isOpen'])
      return this.$store.getters['cart/isOpen']
    }
  },
  methods: {
    removeFromCart(product) {
      console.log('remove from cart')
      this.$store.commit('cart/removeProduct', product)

    },
    closeCart() {
      this.$store.commit('cart/toggleCart', false)
    }
  }
}
</script>

<style scoped lang="scss">
.cart {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(255, 255, 255, .8);

  &__container {
    width: 460px;
    height: 100%;
    margin-left: auto;
    padding: 48px;
    background: #FFFFFF;
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0px 0px 8px;
  }

  &__header {
    margin-top: 4px;
  }

  &__title {
    margin-bottom: 24px;
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
    color: #000000;
  }

  &__products-title {
    margin-bottom: 16px;
  }

  &__products {
    display: flex;
    flex-wrap: wrap;
  }

  &__product {
    display: flex;
    width: 100%;
    padding: 12px 64px 16px 25px;
    margin-bottom: 12px;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
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
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    color: #F2C94C;
  }
}

</style>
