export const state = () => ({
  products: [],
})

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  sortProducts(state, field) {
    state.products.sort(sortByField(field));
  }
}

export const actions = {
  async getProducts({commit}) {
    const response = await this.$axios.get('https://frontend-test.idaproject.com/api/product')
    commit('setProducts', response.data)
  }
}

export const getters = {
  products: s => s.products
}


function sortByField(field) {
  if(field === 'price')
    return (a, b) => a[field] > b[field] ? 1 : -1
  else
    return (a, b) => a[field] < b[field] ? 1 : -1
}
