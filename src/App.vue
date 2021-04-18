<template>
  <div id="app">
    <Header/>
    <!--
    <nav>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/secret">Secret</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/03_organisms/Header";

export default {
  components: {
    Header
  }
};
</script>


<style lang="scss">
@import "@/assets/styles/main.scss";

#app {
  width: 100%;
  height: 100%;
}
</style>
