import Vue from 'vue'
import Checkbox from './component/Checkbox.vue'


var div = document.createElement('div');
div.id = 'checkboxBox';
document.body.append(div);

new Vue({
    el:'#checkboxBox',
    render: h => h(Checkbox)
})