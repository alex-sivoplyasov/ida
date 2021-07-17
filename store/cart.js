export const state = () => ({
  products: {},
  isOpen: false
})

export const mutations = {
  addProduct(state, product) {
    state.products = {...state.products, [product.id]: product}
  },
  removeProduct(state, product) {
    state.products = {...state.products, [product.id]: {} }

  },
  toggleCart(state, status) {
    state.isOpen = status
  },
  removeAllProducts(state) {
    Object.keys(state.products).map( productId => {
      return state.products[productId] = {}
    })
  }
}

export const actions = {
  // async getProducts({commit}) {
  //   const response = await this.$axios.get('https://frontend-test.idaproject.com/api/product')
  //   commit('setProducts', response.data)
  // }
}

export const getters = {
  products: s => s.products,
  isOpen: s => s.isOpen
}
