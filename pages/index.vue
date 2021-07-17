<template>
  <div>
    <Header :cartProductsCount="cartProductsCount"/>
    <div class="container">
      <main class="content">
        <Menu/>
        <Catalog/>
        <Cart :cartProductsCount="cartProductsCount"/>
      </main>
    </div>
  </div>
</template>

<script>

import Header from "../components/Header";
import Menu from "../components/Menu";
import Catalog from "../components/Catalog";
import Cart from "../components/Cart";

export default {
  async fetch({store}) {
    if(store.getters['categories/categories'].length === 0)
      await store.dispatch('categories/getCategories')

    if(store.getters['products/products'].length === 0) {
      await store.dispatch('products/getProducts')
      store.commit('products/sortProducts', 'price')
    }

  },
  computed: {
    categories() {
      return this.$store.getters['categories/categories']
    },
    products() {
      return this.$store.getters['products/products']
    },
    cartProductsCount() {
      let count = 0
      Object.keys(this.$store.getters['cart/products']).forEach( id => {

        if(this.$store.getters['cart/products'][id].id)
          count++
      })
      return count
    }
  },
  components: {Header, Menu, Catalog, Cart}
}
</script>

<style>
body {
  font-family: 'PT Sans', sans-serif;
}

div {
  box-sizing: border-box;
}

.container {
  max-width: 1264px;
  margin: 0 auto;
}

.content {
  display: flex;
  padding-top: 30px;
}

@media (max-width: 1300px)  {
  .container {
    width: 90%;
  }
}
</style>
