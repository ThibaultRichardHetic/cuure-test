<template>
  <div class="popup">
    <div class="popup__content">
      <div class="popup__header">
        <div class="popup__image">
          <img :src="src" alt>
        </div>
        <CpText tag="h3" type="title">{{name}}</CpText>
      </div>
      <div class="popup__text">
        <CpText tag="p" type="main">Origin: {{region}}</CpText>
        <CpText tag="p" type="main">Category : {{category}}</CpText>
        <CpText tag="p" type="card">{{description}}</CpText>
      </div>
    </div>
    <div class="popup__background"></div>
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
      region: this.content.strArea,
      category: this.content.strCategory
    };
  },
  props: {
    content: {
      type: Object
    }
  }
};
</script>

<style lang="scss">
@import "./Popup.scss";
</style>
