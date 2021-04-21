<template>
  <div class="container--header">
    <nav class="header__nav">
      <CpLink type="header" to="/">Home</CpLink>
      <CpLink type="header" to="/login">Login</CpLink>
    </nav>
    <div v-if="loggedIn" class="header__welcom">
      <CpText type="white">Hello {{name}}</CpText>
      <button class="button--small" @click="signOut">Sign out</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";

import CpText from "@/components/01_atoms/CpText/CpText";
import CpLink from "@/components/01_atoms/CpLink/CpLink";

export default {
  name: "Header",
  components: {
    CpText,
    CpLink
  },
  data() {
    return {
      loggedIn: false,
      name: ""
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.loggedIn = !!user;
    });
  },
  watch: {
    loggedIn: function(val) {
      if (val) {
        this.name = firebase.auth().currentUser.displayName;
      }
    }
  },
  methods: {
    async signOut() {
      try {
        const data = firebase.auth().signOut();
        console.log(data);
        this.$router.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style lang="scss">
@import "./Header.scss";
</style>
