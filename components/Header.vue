<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__logo" @click="openCart">TestList</div>
        <div class="header__basket">
          <img src="static/icons/basket.svg" alt="" class="header__basket-image">
          <div class="header__basket-count">{{cartProductsCount}}</div>
        </div>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    cartProductsCount() {
      let count = 0
      Object.keys(this.$store.getters['cart/products']).forEach( id => {

        if(this.$store.getters['cart/products'][id].id)
          count++
      })

      console.log('recount', count)

      return count
    }
  },
  methods: {
    openCart() {
      this.$store.commit('cart/toggleCart', true)
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  padding: 20px 0;
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 8px 8px;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    font-weight: bold;
    font-size: 22px;
    line-height: 28px;
    color: #59606D;
  }

  &__basket {
    position: relative;
  }

  &__basket-count {
    position: absolute;
    top: -5px;
    left: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12px;
    height: 12px;
    border-radius: 50px;
    background: #959DAD;
    font-weight: bold;
    font-size: 8px;
    line-height: 10px;
    color: #FFFFFF;
  }

  &__basket-image {
    margin-right: 20px;
  }

}
</style>
