export const state = () => ({
  categories: []
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  }
}

export const actions = {
  async getCategories({commit}) {
    const response = await this.$axios.get('https://frontend-test.idaproject.com/api/product-category')
    commit('setCategories', response.data)
  }
}

export const getters = {
  categories: s => s.categories
}
