<template>
  <router-link :to="`${page}`" class="tempostyle" :class="`link--${type}`">
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'CpLink',
  props: {
    type: {
      type: String,
      default:'a',
    },
    page: {
      type: String,
      default: '/',
    }
  },
}
</script>


<style lang="scss">
@import "./CpLink.scss";
</style>