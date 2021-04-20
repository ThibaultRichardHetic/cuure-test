<template>
  <div class="page--login">
    <CpText tag="h1" type="title">Login</CpText>
    <form class="login__form" @submit.prevent="pressed">
      <div class="container">
        <CpText tag="label" type="label">Email</CpText>
        <input class="input--default" type="email" placeholder="Email@mail.com" v-model="email">
      </div>
      <div class="container">
        <CpText tag="label" type="label">Password</CpText>
        <input class="input--default" type="password" placeholder="Password" v-model="password">
      </div>
      <button class="button" type="submit">Login</button>
    </form>
    <CpText tag="p" type="main">Do not have an account yet?</CpText>
    <CpLink to="/register">Create an account.</CpLink>
  </div>
</template>

<script>
import CpText from "@/components/01_atoms/CpText/CpText";
import CpLink from "@/components/01_atoms/CpLink/CpLink";

import firebase from "firebase";
import "firebase/auth";

export default {
  components: {
    CpText,
    CpLink
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async pressed() {
      try {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password);
        this.$router.push("/");
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
