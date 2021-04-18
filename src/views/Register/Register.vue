<template>
  <div class="page--register">
    <h1>Register</h1>
    <div v-if="error" class="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      <div class="name">
        <input type="text" v-model="name" placeholder="name">
      </div>
      <div class="email">
        <input type="email" v-model="email" placeholder="email">
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password">
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";

export default {
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
