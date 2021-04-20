<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/03_organisms/Header/Header.vue";

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
