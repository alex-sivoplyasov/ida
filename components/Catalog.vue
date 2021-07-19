<template>
  <section class="catalog">
    <div class="catalog__sort">
      <div class="catalog__sort-text">Сортировать по:</div>
      <div class="catalog__sort-value" @click="toggleSortBlock" :class="{open: isOpenSortBlock}">{{sortBy}}</div>
      <div class="catalog__sort-list" v-if="isOpenSortBlock">
        <div class="catalog__sort-item" @click="sortProducts('price', 'цене')" data-sort="price">
          По цене
        </div>
        <div class="catalog__sort-item" @click="sortProducts('rating', 'популярности')" data-sort="rating">
          По популярности
        </div>
      </div>
    </div>

    <div class="catalog__products">
      <div class="catalog__product-wrapper" v-for="product in products" :key="product.id" v-if="product.category === currentCategoryId">
        <div class="catalog__product">
          <div class="catalog__product-rating" v-if="product.rating"> {{product.rating}}</div>
          <img src="~assets/icons/basket.svg" alt="" class="catalog__product-button" @click="addToCart(product)"/>
          <div class="catalog__product-image-wrapper">
            <img :src=" `https://frontend-test.idaproject.com${product.photo}` " alt="" class="catalog__product-image">
          </div>
          <div class="catalog__product-name"> {{product.name}} </div>
          <div class="catalog__product-price">{{formattedPrice(product.price)}} ₽</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Catalog",
  data: () =>({
    isOpenSortBlock: false,
    sortBy: 'цене'
  }),
  computed: {
    products() {
      return this.$store.getters['products/products']
    },
    currentCategoryId() {
      return this.$store.getters['categories/currentCategoryId']
    }
  },
  methods: {
    toggleSortBlock() {
      this.isOpenSortBlock = !this.isOpenSortBlock
    },
    sortProducts(field, text) {
      this.isOpenSortBlock = false
      this.$store.commit('products/sortProducts', field)
      this.sortBy = text
    },
    addToCart(product) {
      this.$store.commit('cart/addProduct', product)
    },
    formattedPrice(price) {
      return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
    }
  },
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
  }

  &__sort-value {
    position: relative;
    display: flex;
    align-items: flex-end;
    color: #59606D;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      top: 9px;
      right: -8px;
      width: 5px;
      height: 3px;
      background-image:  url('~assets/icons/arrow.svg');
      transform: rotate(180deg);
    }

    &.open {
      &:before {
        transform: rotate(0deg);
        top: 11px;
      }
    }
  }

  &__sort-list {
    position: absolute;
    right: -8px;
    top: 31px;
    width: 160px;
    padding: 8px 0 12px;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    z-index: 1;
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
    margin: 35px -8px 0;
  }

  &__product-wrapper {
    padding: 0 8px;
    width: 25%;
    margin-bottom: 16px;
  }

  &__product {
    position: relative;
    background: #FFFFFF;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 18px 16px 16px;
  }

  &__product-rating {
    position: absolute;
    top: 20px;
    left: 36px;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    color: #F2C94C;
    &:before {
      content: '';
      position: absolute;
      left: -18px;
      top: 0;
      width: 14px;
      height: 14px;
      background-image:  url('~assets/icons/star.svg');
    }
  }

  &__product-button {
    position: absolute;
    top: 18px;
    right: 18px;
    width: 12px;
    height: 13px;
    cursor: pointer;
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
    height: 36px;
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
