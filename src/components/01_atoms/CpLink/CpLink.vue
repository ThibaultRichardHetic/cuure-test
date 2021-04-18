<template>
  <router-link :to="`${to}`" :class="`link--${type}`">
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'CpLink',
  props: {
    type: {
      type: String,
      default:'default',
    },
    to: {
      type: String,
      default: '/',
    }
  },
}
</script>


<style lang="scss">
@import "./CpLink.scss";
</style>