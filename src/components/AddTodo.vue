<template>
  <div>
    <h1>ADD TODO</h1>
    <form @submit.prevent="onSubmit()">
      <input type="text" v-model="title" placeholder="Add Todo..." />
      <input type="submit" value="submit">
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return {
            title : ''
        }
    },
    methods : {
        ...mapActions(['addTodo']),
        onSubmit(){
            console.log("value..",this.title);
            this.addTodo(this.title)

        }
    }
};
</script>

<style>
</style>