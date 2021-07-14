<template>
  <section class="catalog">
    <div class="catalog__sort">
      <div class="catalog__sort-text">Сортировать по:</div>
      <div class="catalog__sort-value">цене</div>
      <div class="catalog__sort-list">
        <div class="catalog__sort-item">
          По цене
        </div>
        <div class="catalog__sort-item">
          По популярности
        </div>
      </div>
    </div>

    <div class="catalog__products">
      <div class="catalog__product-wrapper" v-for="product in products" :key="product.id">
        <div class="catalog__product" >
          <div class="catalog__product-rating" v-if="product.rating">{{product.rating}}</div>
          <div class="catalog__product-button"></div>
          <div class="catalog__product-image-wrapper">
            <img :src="product.photo" alt="" class="catalog__product-image">
          </div>
          <div class="catalog__product-name"> {{product.name}}</div>
          <div class="catalog__product-price">{{product.price}} ₽</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "catalog",
  data: () => ({
    products: []
  }),
  async beforeMount() {
    console.log('before mount', this.$axios)
    // const url = 'https://frontend-test.idaproject.com/api/product'
    // const axios = await require('axios');
    //
    // try {
    //   const res = await axios.get(url)
    //   this.products = res.data
    // } catch (e) {
    //   console.log(e)
    // }

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.catalog {
  flex: 1;
  padding-top: 11px;

  &__sort {
    position: relative;
    display: flex;
    width: fit-content;
    margin-left: auto;
    margin-right: 9px;
    font-size: 16px;
    line-height: 21px;

    &:before {
      //content: url(./images/arrow.svg);
      position: absolute;
      right: -9px;
      top: -3px;
    }
  }

  &__sort-text {
    display: flex;
    align-items: flex-end;
    color: #1F1F1F;
    margin-right: 6px;
    cursor: pointer;
  }

  &__sort-value {
    display: flex;
    align-items: flex-end;
    color: #59606D;
  }

  &__sort-list {
    display: none;
    position: absolute;
    right: 22px;
    top: 31px;
    padding: 8px 0 12px;
    background: #FFFFFF;
    //box-shadow: 0px 4px 16px rgba(0 0 0 / 5%);
    border-radius: 8px;
    &.active {
      display: block;
    }
  }

  &__sort-list.active {

  }

  &__sort-item {
    padding: 4px 12px;
    font-size: 14px;
    line-height: 18px;
    color: #959DAD;
    cursor: pointer;
  }

  &__sort-item:hover {
    color: #1F1F1F;
    background: #F8F8F8;
  }

  &__products {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
  }

  &__product-wrapper {
    padding: 0 8px;
    width: 25%;
    margin-bottom: 16px;
  }

  &__product {
    background: #FFFFFF;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 18px 16px 16px;
  }

  &__product-rating {

  }

  &__product-button {

  }

  &__product-image-wrapper {
    height: 180px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__product-image {
    max-width: 100%;
    max-height: 100%;
  }

  &__product-name {
    margin-top: 16px;
    font-size: 14px;
    line-height: 18px;
    color: #59606D;
  }

  &__product-price {
    margin-top: 6px;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #1F1F1F;
  }
}
</style>
