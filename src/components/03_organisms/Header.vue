<template>
  <div class="container--header">
    Header
    <span v-if="loggedIn">Yes {{name}}</span>
    <span v-else>No</span>
    <!-- <div>
      <button @click="signOut">Sign out</button>
    </div> -->
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
    });
  },
  data() {
    return {
      loggedIn: false,
      name: firebase.auth().currentUser.displayName
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
* {
  color: red;
}
</style>
