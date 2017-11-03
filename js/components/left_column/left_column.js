require.config({
    paths:{
        'vue':'vue',
        'vli':'components/left_column/vli'
    }
});

define(['vue','vli'],function( Vue,vli ){
    return Vue.component('leftColumn',{
            template:'\
                <div class="left-column">\
                    <span class="page-title">百度语音</span>\
                    <ul>\
                        <li is="vli"\
                            v-for="item in items"\
                            v-bind:class="item.active?activeClassName:notActiveClassName"\
                            v-bind:li-name="item.liName"\
                            v-on:clickedLi="clickedLi">\
                        </li>\
                    </ul>\
                </div>',
            components:{
                'vli':vli
            },
            data:function(){
                return {
                    activeClassName:'column-active',
                    notActiveClassName:'',
                    items:[
                        {liName:'应用列表',active:true},
                        {liName:'监控报表',active:false},
                        {liName:'技术文档',active:false},
                        {liName:'SDK下载',active:false}
                    ]
                }
            },
            methods:{
                clickedLi:function(target){
                    console.log('1111')
                    console.log( target )
                }
            }
    });

});
