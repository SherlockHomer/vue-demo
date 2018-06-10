Vue.component('base-checkbox',{
    props:['check','index'],
    template:`
        <div>
            <input type="checkbox" :id="index" :value="value" v-model="checked"/>
            <label :for="index">{{checkedValue}}</label>
        </div>
    `,
    computed:{
        checkedValue:function(){
            // 这里改变prop 的值
            return this.checked ? this.value : '猜猜我是谁';
        }
    },
    data:function(){
        return {
            checked:this.check.checked,
            value:this.check.value
        }
    }
})

var vmcheck = new Vue({
    el:'#checkboxBox',
    data:{
        checkboxs:[
        {value:'sher',checked:true},
        {value:'lock',checked:false},
        {value:'homer',checked:true}
        ]
    }
})