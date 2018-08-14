Vue.component('custom-input',{
    props:['value'],
    template:`
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value,'sherlock')"
    >
  `
})

var vmcheck = new Vue({
    el:'#searchTextBox',
    data:{
        searchText:'',
        final:''
    }
})