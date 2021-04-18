import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Login from "../views/Login/Login.vue";
import Register from "../views/Register/Register.vue";
import Secret from "../views/Secret/Secret.vue";
import firebase from "firebase";
import "firebase/auth";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {requireAuth: true}
  },
  {
    path: '/secret',
    name: 'Secret',
    component: Secret
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next)=> {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated) {
    next("/login")
  } else {
    next()
  }
})

export default router;
