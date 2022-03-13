// import axios from 'axios'

import axios from "axios"


const state = {
    todos: [],
    userId : false
}

const getters = {
    //Shorthand notation //

    // allTodos : (state) => {
    //     return state.todos

    // }
    allTodos(state){
        return state.todos

    },
    userId(state){
        return state.userId

    }

}

const actions = {
    // fetchTodos(context){

    // }
    fetchTodos(context)

    {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>{
            console.log(res.data);
           context.commit('setTodos',res.data)

        })
        // console.log(context);
    },
    addTodo(context,title){
        axios.post('https://jsonplaceholder.typicode.com/todos',{title:title,completed:false})
        .then(res=>{
            console.log(res.data);
            context.commit('newTodo',res.data)

        })
        

    }
}

const mutations = {
    setTodos(state,todos){
        state.todos = todos

    },
    newTodo(state,newTodo){
        state.todos.unshift(newTodo)

    },
    login(state)
    {
        console.log("login mutation called..");
        state.userId = true
        console.log(state.userId);

    }
}

export default {
    state,
    getters,
    actions,
    mutations
}