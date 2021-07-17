<template>
  <div class="cart__form">
    <div class="cart__form-title">
      Оформить заказ
    </div>

    <div class="cart__form-inputs">
      <input type="text" class="cart__form-input" v-model="name" placeholder="Ваше имя">
      <input type="text" class="cart__form-input" v-model="phone" placeholder="Телефон">
      <input type="text" class="cart__form-input" v-model="address" placeholder="Адрес">
    </div>

    <div class="cart__form-button" @click="submitForm">
      Отправить
    </div>

    <div class="cart__form-error" v-if="hasError">
      Заполните все поля
    </div>
  </div>
</template>

<script>
export default {
name: "CartForm",
  data: () => ({
    name: null,
    phone: null,
    address: null,
    hasError: false
  }),
  methods: {
    submitForm() {
      if(this.name && this.phone && this.address) {
        this.$emit('submitForm', {
          name: this.name,
          phone: this.phone,
          address: this.address
        })
        this.removeAllProducts()
        this.hasError = false

      } else {
        this.hasError = true
      }
    },
    removeAllProducts() {
      this.$store.commit('cart/removeAllProducts')
    }
  }
}
</script>

<style scoped lang="scss">
.cart {
  &__form {
    margin-top: 32px;
  }

  &__form-title {
    font-size: 18px;
    line-height: 23px;
    color: #59606D;
  }

  &__form-inputs {
    display: flex;
    flex-wrap: wrap;
  }

  &__form-input {
    width: 100%;
    margin-top: 16px;
    padding: 14px;
    background: #F8F8F8;
    border-radius: 8px;
    font-size: 16px;
    line-height: 21px;
    color: #959DAD;
    border: none;
    outline: none;
  }

  &__form-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
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

  &__form-error {
    position: relative;
    margin-top: 32px;
    padding-left: 24px;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 4px;
      width: 19px;
      height: 41px;
      background-image:  url('~assets/icons/error.svg');
      background-repeat: no-repeat;
    }
  }
}
</style>
