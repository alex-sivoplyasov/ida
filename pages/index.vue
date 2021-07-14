<template>
  <div>
    page
  </div>
<!--  <ul v-if="categories.length">-->
<!--    <li v-for="category in categories" :key="category.id">-->
<!--      {{category.name}}-->
<!--    </li>-->
<!--  </ul>-->
</template>

<script>
export default {
  async fetch({store}) {
    // console.log('')
    console.log('fetch2')
    if(store.getters['categories/categories'].length === 0)
      await store.dispatch('categories/getCategories')
  },
  // async asyncData({$axios}) {
  //   const url = 'https://frontend-test.idaproject.com/api/product-category'
  //   const res = await $axios.get(url)
  //   const categories = res.data
  //
  //   console.log(res.data)
  //   return {categories}
  // },
  // data: () => ({
  //   categories: []
  // }),
  computed: {
    categories() {
      return this.$store.getters['categories/categories']
    }
  }
}
</script>
