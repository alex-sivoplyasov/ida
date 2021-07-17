<template>
  <section class="menu">
    <div class="menu__title">
      Каталог
    </div>

    <div class="menu__list" v-for="category in categories" :key="category.id">
      <div class="menu__item" :class="{active: (currentCategoryId === category.id)}" @click="changeCategory(category.id)">{{ category.name }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Menu",
  computed: {
    categories() {
      return this.$store.getters['categories/categories']
    },
    currentCategoryId() {
      return this.$store.getters['categories/currentCategoryId']
    }
  },
  methods: {
    changeCategory(categoryId) {
      this.$store.commit('categories/setCategoryId', categoryId)
    }
  }
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
