

var vmcheck = new Vue({
    el:'#checkboxBox',
    data:{
        // checked:[],
        items:[
        {name:'sher',checked:true},
        {name:'jb杰城',checked:false},
        {name:'homer',checked:false}
        ]
    },
    methods:{
        checkVal:function(index){
            return this.items[index].checked ? this.items[index].name : '猜猜我是谁';
        }
    }
})