define(['vue'],function( Vue ){
    var vli = Vue.component('vli',{
        props:['liName'],
        template:'<li v-on:click="clickHandler">{{ liName }}</li>',
        methods:{
            clickHandler:function(){
                this.$emit('clickedLi',this);
            }
        }
    });

    return vli;
})