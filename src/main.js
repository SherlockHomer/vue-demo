Vue.component('sher-comp',{
    template:'<div>I am sher-comp</div>'
});
Vue.component('lock-comp',{
    template:'<div>I am lock-comp</div>'
});
Vue.component('homer-comp',{
    template:'<div>I am homer-comp</div>'
})

var vmcheck = new Vue({
    el:'#tabs',
    data:{
        tabs: ['sher', 'lock', 'homer'],
        currentTab:'lock'
    },
    computed:{
        currentTabComp:function(){
            return this.currentTab+'-comp';
        }
    }
})