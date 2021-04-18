<template>
    <input :class="`input--${attribute}`" :type="`${type}`" :placeholder="`${placeholder}`">
</template>


<script>
// changer le nom de la class
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    attribute: {
      type: String,
      default: 'default'
    },
    placeholder: {
      type: String,
      default: 'Fill the blank'
    },
  }
}
</script>


<style lang="scss">
@import "./CpInput.scss";
</style>