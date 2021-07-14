<template>
  <div>
    <Header/>
    <div class="container">
      <main class="content">
        <Menu/>
        <nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Menu from "../components/Menu";
// import Catalog from "../components/Catalog";
export default {
  components: {Header, Menu}
}
</script>


<style lang="scss">

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
</style>
