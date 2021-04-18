<template>
  <div class="page--home">
    <CpText tag="h1" type="title">Home</CpText>
    <div class="container--cards">
      <Card v-for="item in items" :content="item" :key="item.idMeal"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import CpText from "@/components/01_atoms/CpText/CpText";
import Card from "@/components/02_molecules/Card/Card";

export default {
  name: "Home",
  components: {
    CpText,
    Card
  },
  data() {
    return {
      text: "test",
      info: null,
      items: [],
      loading: true
    };
  },
  mounted() {
    const callApi = () => {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => {
          this.info = response.data.meals[0];
          this.items.push(this.info);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
    };
    for (let index = 0; index <= 4; index++) {
      callApi();
    }
  }
};
</script>

<style lang="scss">
@import "./Home.scss";
</style>
