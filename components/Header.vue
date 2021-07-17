<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__logo">TestList</div>
        <div class="header__cart" @click="openCart">
          <img src="~/assets/icons/basket.svg" alt="" class="header__cart-image">
          <div class="header__cart-count">{{cartProductsCount}}</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ['cartProductsCount'],
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

  &__cart {
    position: relative;
    cursor: pointer;
  }

  &__cart-count {
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

  &__cart-image {
    margin-right: 20px;
  }

}
</style>
