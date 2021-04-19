<template>
  <div class="page--login">
    <CpText tag="h1" type="title">Connexion</CpText>
    <form class="login__form" @submit.prevent="pressed">
      <div class="container">
        <CpText tag="label" type="label">Email</CpText>
        <CpInput type="email" placeholder="Email@mail.com" v-model="email"/>
      </div>
      <div class="container">
        <CpText tag="label" type="label">Mot de passe</CpText>
        <CpInput type="password" placeholder="Password" v-model="password"/>
      </div>
      <button class="button" type="submit">Connexion</button>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
    <CpText tag="p" type="main">Vous n'avez pas encore de compte ?</CpText>
    <CpLink to="/register">Créer un compte.</CpLink>
  </div>
</template>

<script>
import CpInput from "@/components/01_atoms/CpInput/CpInput";
import CpText from "@/components/01_atoms/CpText/CpText";
import CpLink from "@/components/01_atoms/CpLink/CpLink";

import firebase from "firebase";
import "firebase/auth";

export default {
  components: {
    CpInput,
    CpText,
    CpLink
  },
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
        firebase.auth().signInWithEmailAndPassword(this.email, this.password);
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
