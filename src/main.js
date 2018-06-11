var navigation = {
    props:['url'],
    template:`
    <div>
        <a :href="'www.baidu.com/'+url.name">www.baidu.com/<slot name="slotman"></slot></a>
        <slot>submit</slot>
    </div>
    `
}

var vmcheck = new Vue({
    el:'#slotBox',
    data:{
        urls:[
        {name:'sher'},
        {name:'lock'},
        {name:'homer'}
        ]
    },
    components:{
        navigation
    }
})