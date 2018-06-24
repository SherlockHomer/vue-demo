<template>
    <div id="" class="col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4">
        <div v-for="(item,index) in items">
            <input type="checkbox" :id="index" :value="item.name" v-model="checked">
            <label :for="index" v-if="checked.indexOf(item.name) > -1">{{item.name}}</label>
            <label :for="index" v-else>猜猜我是谁</label>
            <br>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Checkbox',
        data:function(){
            return {
                checked:[],
                items:[
                {name:'shgger'},
                {name:'jb杰城'},
                {name:'homer'}
                ]
            }
        }
    }
</script>
