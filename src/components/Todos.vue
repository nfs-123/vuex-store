<template>
  <div>
      <h1>todos</h1>
      <div v-for="todo in allTodos" :key="todo.id" style="border:2px solid black;padding:2px;margin:2px">
          <p>{{todo.title}}</p>

      </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    computed : mapGetters(['allTodos']),
    methods : {
        ...mapActions(['fetchTodos'])
    },
    created(){
        this.fetchTodos()
    }

}
</script>

<style>

</style>