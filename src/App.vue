<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="login()">Login</button>
    <!-- {{userId}} -->
<!-- {{store.state.userId}} -->
    
      <AddTodo/>
      <hr />
      <Todos/>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo";
// import { mapState } from 'vuex';
// import mapGetters from 'vuex'

export default {
  name: "App",
  components: {
    // HelloWorld
    Todos,
    AddTodo,
  },
  //  computed: mapState({
  //           userId: state => state.userId
  //       }),
    // computed : mapGetters({}),



  
  methods : {
    login(){
      console.log("login called");

      this.$store.commit('login')
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
