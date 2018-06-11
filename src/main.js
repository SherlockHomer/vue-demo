var navigation = {
    props:['url'],
    template:`
    <div>
        <a :href="'www.baidu.com/'+url.name">www.baidu.com/</a>
        <slot name="slotman" :text="text"></slot>
        <slot>submit</slot>
    </div>
    `,
    data:function(){
        return {
            text:'I am from component data'
        }
    }
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