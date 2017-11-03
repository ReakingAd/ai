require.config({
    paths:{
        'vue':['vue'],
        'leftColumn':['components/left_column/left_column'],
        'mainContainer':['components/main_container/main_container']
    }
});

define(['vue','leftColumn','mainContainer'],function( Vue,leftColumn,mainContainer ){
    new Vue({
        el:'#app',
        components:{
            'left-column':leftColumn,
            'main-container':mainContainer
        }
    });
})