<template>
  <div class="container--header">
    Header
    <span v-if="loggedIn">Yes</span>
    <span v-else>No</span>
    <div>
      <button @click="signOut">Sign out</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";

export default {
  name: "Header",
  components: {},
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.loggedIn = !!user;
      // if(user) {
      //   this.loggedIn = true;
      // } else {
      //   this.logged = false
      // }
    });
  },
  data() {
    return {
      loggedIn: false
    };
  },
  methods: {
    async signOut() {
      try {
        const data = firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "login" });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style lang="scss">
// @import "./Header.scss"
</style>
