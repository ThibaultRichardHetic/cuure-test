<template>
  <div class="page--home">
    <CpText tag="h1" type="title">Home</CpText>
    <div class="container--cards">
      <Card @click.native="popOpen(item)" v-for="item in items" :content="item" :key="item.idMeal"/>
    </div>
    <div v-if="popupDisplay" class="container--popup">
      <Popup :content="popupContent"/>
      <div class="popup__cross" @click="popupDisplay = false">
        <img src="@/assets/images/close.svg" alt>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import CpText from "@/components/01_atoms/CpText/CpText";
import Card from "@/components/02_molecules/Card/Card";
import Popup from "@/components/02_molecules/Popup/Popup";

export default {
  name: "Home",
  components: {
    CpText,
    Card,
    Popup
  },
  data() {
    return {
      text: "test",
      info: null,
      items: [],
      loading: true,
      popupContent: null,
      popupDisplay: false
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
  },
  methods: {
    popOpen: function(item) {
      console.log(item);
      this.popupDisplay = true;
      this.popupContent = item;
    }
  }
};
</script>

<style lang="scss">
@import "./Home.scss";
</style>
