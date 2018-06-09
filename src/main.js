Vue.component('counter',{
    data:function(){
        return {
            count:0
        }
    },
    template:'<button @click="countMe" :value="count">you click me to {{count}} times</button>',
    methods:{
        countMe:function(e){
            this.count++;
            this.$emit('changefont',this.count);
        }
    }
});

new Vue({
    el:'#counters-demo',
    data:{
        clickTimes:1
    }
    // methods:{
    //     changefont:function(times){
    //         this.clickTimes = times;
    //     }
    // }
})