<template>
  <div class="page--register">
    <CpText tag="h1" type="title">Account creation</CpText>
    <form class="register__form" @submit.prevent="pressed">
      <div class="container">
        <CpText tag="label" type="label">Name</CpText>
        <input class="input--default" type="text" placeholder="Juliette" v-model="name">
      </div>
      <div class="container">
        <CpText tag="label" type="label">Email</CpText>
        <input class="input--default" type="email" placeholder="Email@mail.com" v-model="email">
      </div>
      <div class="container">
        <CpText tag="label" type="label">Password</CpText>
        <CpText tag="p" type="small">6 characters minimum</CpText>
        <input class="input--default" type="password" placeholder="Password" v-model="password">
      </div>
      <button class="button" type="submit">Register</button>
    </form>
    <CpText tag="p" type="main">Already have an account?</CpText>
    <CpLink to="/login">Login.</CpLink>
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
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user);
          this.username();
        })
        .catch(err => {
          console.log(err.message);
        });
    },
    username() {
      firebase
        .auth()
        .currentUser.updateProfile({ displayName: this.name })
        .then(name => {
          console.log(name);
        })
        .catch(err => {
          console.log(err);
        });
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
@import "./Register.scss";
</style>
