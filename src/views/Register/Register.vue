<template>
  <div class="page--register">
    <CpText tag="h1" type="title">Création de compte</CpText>

    <div v-if="error" class="error">{{error.message}}</div>
    <form class="register__form" @submit.prevent="pressed">
      <div class="container">
        <CpText tag="label" type="label">Prénom</CpText>
        <CpInput type="text" placeholder="Juliette" v-model="name"/>
      </div>
      <div class="container">
        <CpText tag="label" type="label">Email</CpText>
        <CpInput type="email" placeholder="Email@mail.com" v-model="email"/>
      </div>
      <div class="container">
        <CpText tag="label" type="label">Mot de passe</CpText>
        <CpInput type="password" placeholder="Password" v-model="password"/>
      </div>
      <button class="button" type="submit">Register</button>
    </form>
    <CpText tag="p" type="main">Vous avez déjà un compte ?</CpText>
    <CpLink to="/login">Connexion.</CpLink>
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
      name: "",
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user);
          firebase
            .auth()
            .currentUser.updateProfile({ displayName: this.name })
            .then(name => {
              console.log(name);
            })
            .catch(err => {
              console.log(err);
            });
          this.$router.replace({ name: "secret" });
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  }
};
</script>

<style lang="scss">
@import "./Register.scss";
</style>
