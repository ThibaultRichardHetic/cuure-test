<template>
  <div class="page--home">
    <CpText tag="h1" type="title">Home</CpText>
    <div class="container--cards">
      <Card
        @click.native="popOpen(item)"
        v-for="item in allItems.slice((actuPage-1) * perPage, actuPage * perPage)"
        :content="item"
        :key="item.idMeal"
      />
    </div>
    <div class="container--pagination">
      <div class="pagination__chevron" @click="pageDown">
        <img src="@/assets/images/chevron.svg" alt>
      </div>
      <CpText tag="p" type="main">{{actuPage}}/{{nbPages}}</CpText>
      <div class="pagination__chevron" @click="pageUp">
        <img src="@/assets/images/chevron.svg" alt>
      </div>
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
      allItems: [],
      actuPage: 1,
      nbPages: 5,
      perPage: 5,
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
          this.allItems.push(this.info);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
    };
    for (let index = 0; index < this.nbPages * this.perPage; index++) {
      callApi();
    }
    this.items = this.allItems.slice(0, 6);
  },
  methods: {
    popOpen: function(item) {
      this.popupDisplay = true;
      this.popupContent = item;
    },
    pageUp: function() {
      if (this.actuPage < 5) {
        this.actuPage++;
      }
    },
    pageDown: function() {
      if (this.actuPage > 1) {
        this.actuPage--;
      }
    }
  }
};
</script>

<style lang="scss">
@import "./Home.scss";
</style>
