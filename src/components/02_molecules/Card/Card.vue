<template>
  <div class="container--card">
    <div class="card__content">
      <div class="card__image">
        <img :src="src" alt>
      </div>
      <div class="card__text">
        <CpText tag="p" type="main">{{name}}</CpText>
        <CpText tag="p" type="card">{{description.slice(0,70)}} ...</CpText>
      </div>
    </div>
  </div>
</template>

<script>
import CpText from "@/components/01_atoms/CpText/CpText";

export default {
  components: {
    CpText
  },
  data() {
    return {
      name: this.content.strMeal,
      src: this.content.strMealThumb,
      description: this.content.strInstructions,
    };
  },
  props: {
    content: {
      type: Object
    }
  },
};
</script>

<style lang="scss">
@import "./Card.scss";
</style>
