Vue.component('todo-item',{
    template:'<li class="form-group" :key="todo.id">{{todo.id}}.{{todo.text}}<button class="btn-danger" @click="$emit(\'remove\')">-</button></li>',
    props:['todo']
});

var vm = new Vue({
    el:'#todo-list',
    data:{
        newTodoText:'',
        newTodoId:4,
        todos:[
        {id:1,text:'get up early'},
        {id:2,text:'clean teeth'},
        {id:3,text:'eat breakfast'}
        ]
    },
    methods:{
        addNewOne:function(){
            let newTodo = this.todos[this.todos.length-1] ;
            newTodoId = newTodo ? newTodo.id+1 : 1;
            this.todos.push({id:newTodoId,text:this.newTodoText})
        }
    }
})