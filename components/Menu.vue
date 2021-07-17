<template>
  <section class="menu">
    <div class="menu__title" @click="test">
      Каталог
    </div>

    <div class="menu__list" v-for="category in categories" :key="category.id">
<!--      <NuxtLink :to='category.id' class="menu__item">{{category.name}}</NuxtLink>-->
      <div class="menu__item">{{category.name}}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Menu",
  computed: {
    categories() {
      console.log('cats', this.$store.getters['categories/categories'])
      return this.$store.getters['categories/categories']
    }
  },
  methods: {
    openCategory(category) {
      this.$router.push('/' + category.id)
    },
    test() {
      console.log('cats', this.$store.getters['categories/categories'])    }
  },
  // async fetch({store}) {
  //   console.log('11111111')
  //   if(store.getters['categories/categories'].length === 0)
  //     await store.dispatch('categories/getCategories')
  // }
}
</script>

<style scoped lang="scss">
.menu {
  width: 140px;
  margin-right: 20px;

  &__title {
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
    color: #1F1F1F;
  }

  &__list {
    margin-top: 25px;
  }

  &__item {
    display: flex;
    align-items: flex-end;
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 21px;
    color: #959DAD;
    text-decoration: none;
    cursor: pointer;
  }

  &__item:hover {
    color: #59606D;
    text-decoration: none;
  }

  &__item.active {
    color: #1F1F1F;
    text-decoration: underline;
  }
}
</style>
