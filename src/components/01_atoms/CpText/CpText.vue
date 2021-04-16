<template>
  <component
  :is="tag" :class="`text--${type}`"
  >
  <slot />
  </component>
</template>

<script>
export default {
  name: 'CpText',
  props: {
    tag: {
      type: String,
      default: 'p',
    },
    type: {
      type: String,
      default: 'body-m',
    },
  }
}
</script>


<style lang="scss">
@import "./CpText.scss";
</style>