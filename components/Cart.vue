<template>
  <div class="cart" v-if="isOpenCart">
    <div class="cart__container">
      <div class="cart__header">
        <div class="cart__title">
          Корзина
        </div>

        <img src="~assets/icons/cross.svg" class="cart__close" @click="closeCart"/>
      </div>

      <div class="cart__content" v-if="cartProductsCount">
        <CartProducts/>
      </div>
      <CartForm v-if="cartProductsCount" @submitForm="submitForm"/>

      <div class="cart__empty" v-if="!cartProductsCount && !isSuccess">
        <div class="cart__empty-title">
          Пока что вы ничего не добавили
          в корзину.
        </div>

        <div class="cart__empty-button" @click="closeCart">
          Перейти к выбору
        </div>
      </div>

      <div class="cart__success" v-if="isSuccess">
        <img src="~assets/icons/ok.svg" alt="" class="cart__success-image">
        <div class="cart__success-title">
          Заявка успешно отправлена
        </div>
        <div class="cart__success-info">
          Вскоре наш менеджер свяжется с Вами
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import CartProducts from "./CartProducts";
import CartForm from "./CartForm";

export default {
  name: "Cart",
  props: ['cartProductsCount'],
  data: () => ({
    isSuccess: false
  }),
  computed: {
    isOpenCart() {
      return this.$store.getters['cart/isOpen']
    }
  },
  methods: {
    closeCart() {
      this.$store.commit('cart/toggleCart', false)
    },
    submitForm(data) {
      this.isSuccess = true
    }
  },
  components: {CartProducts, CartForm}
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
    overflow-x: scroll;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4px;
    margin-bottom: 24px;
  }

  &__title {
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
    color: #000000;
  }

  &__close {
    cursor: pointer;
  }

  &__empty-title {
    margin-bottom: 24px;
    font-size: 22px;
    line-height: 28px;
    color: #000000;
  }

  &__empty-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px;
    background: #1F1F1F;
    border-radius: 8px;
    font-size: 16px;
    line-height: 21px;
    color: #FFFFFF;
    cursor: pointer;
    &:hover {
      background: #59606D;
    }
  }

  &__success {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  &__success-image {
    margin-bottom: 24px;
    width: 80px;
    height: 80px;
  }

  &__success-title {
    margin-bottom: 2px;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    color: #000000;
  }

  &__success-info {
    font-size: 16px;
    line-height: 21px;
    color: #59606D;
  }
}

</style>
