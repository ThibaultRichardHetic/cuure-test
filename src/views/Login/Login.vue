<template>
  <div class="page--login">
    <h1>Login</h1>
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="email" placeholder="login" v-model="email">
      </div>
      <div class="password">
        <input type="password" placeholder="password" v-model="password">
      </div>
      <button type="submit">Login</button>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
    <span>
      Need an account? Click here to
      <router-link to="/register">register</router-link>
    </span>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async pressed() {
      try {
        const val = firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(val);
        this.$router.replace({ name: "secret" });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style lang="scss">
@import "./Login.scss";
</style>
