<template>
    <div class="list">
        <dl v-for="(item,index) in list " :key='index'>
            <dt>{{item.img}}</dt>
            <dd>{{item.name}}</dd>
        </dl>
    </div>  
</template>

<script>
export default {
    data(){
        return{
            list:[{
                name:"承担",
                img:""
            },{
                name:"奖励",
                img:""
            },{
                name:"奖金",
                img:""
            },{
                name:"奖金",
                img:""
            },{
                name:"奖金",
                img:""
            },{
                name:"奖金",
                img:""
            },{
                name:"奖金",
                img:""
            },{
                name:"奖金",
                img:""
            }]
        }
    }
}
</script>

<style>
.list{
    width:100%;
    height:100px;
    display:flex;
    flex-wrap:wrap;
}
.list dl{
    width:25%;
    text-align: center;
}
.list dl dt{
    width:20px;
    height:20px;
    border-radius:50%;
    background: red;
    text-align: center;
}
</style>
