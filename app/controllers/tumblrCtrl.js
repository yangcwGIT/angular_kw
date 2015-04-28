/**
 * Created by jyo on 15-3-4.
 */

var tumblr;



require([ 'domReady!',"mmState","mmRequest"], function () {

    //一个顶层VM
    tumblr =avalon.define({
        $id: 'tumblr',
        //host:'http://192.168.8.107:1333/v1',
        host:'http://api.dev.ikaowo.com/v1',
        hosts:{
            'dev':'http://192.168.8.107:1333/v1',
            //'dev':'http://api.ikaowo.com/v1',
            'main':'http://api.ikaowo.com/v1',
            'prepro':'http://api.dev.ikaowo.com/v1'
        },
        list : {listdata: [], tags: [], summary: '', listmp4: []},
        datas: {
            sch:[],
            certi: {prosList: [],ttl:'',icon_height:''}
        },
        recruit:{},
        services:{
            certi:{},
            recruit:{
                postForm: function (data,cb) {

                    tumblr['env']=setEnv(tumblr);

                    var host=tumblr['hosts'][setEnv()];

                     avalon.post(host+'/mana/apply',{
                        nickname:data.name,
                        phone:data.phone,
                        summary:data.summary
                    } ).then(function(result) {
                        return cb(null,result);
                    });
                },
                phoneCheck: function (phone,cb) {
                    setEnv();
                    var host=tumblr['hosts'][setEnv()];

                    avalon.post(host+'/mana/phonecheck',{
                        phone:phone
                    }).then(function (result) {
                        if(result['err']==='null') return cb();
                        return cb('此手机号码已登记申请,请耐心等待客服人员联系');
                    })
                }
            }
        }
    });

    function setEnv() {
        if(window.location.href.indexOf('m.dev.ikaowo')>(-1)){
            console.log('window.location.href');
            return 'prepro';
        }else if(window.location.href.indexOf('m.ikaowo')>(-1)){
            return  'main';
        }else{
            return   'dev'
        }
     }

    //avalon.state("contacts", {
    //    controller: "test",
    //    abstract: true,
    //    url: "/contacts",

    avalon.state("tumblr", {
        abstract: true,
        controller: "tumblr",
        url       : "/",
        views     : {
            ""     : {
                template: '<p class="lead">Welcome to the UI-Router Demo</p>' +
                '<p>Use the menu above to navigate. ' +
                'Pay attention to the <code>$state</code> and <code>$stateParams</code> values below.</p>' +
                '<p>Click these links—<a href="#!/contacts/1">Alice</a> or ' +
                '<a href="#!/contacts/2">Bob</a>—to see a url redirect in action.</p>'
            },
            'hint@': {
                template: "当前状态是home"
            }
        }

    });



    var
        requireAry=['domReady!'];
    var params;
    if (window.location.href.indexOf('?') > (-1)) {
        var url=window.location.href;

        params=url.split('?')[1];
        var stateName=url.split('?')[0].split('#!/')[1]+'State';
        requireAry.push(stateName);

    }else{
        var stateHref=window.location.href.split('#!/')[1],
            stateJsName=stateHref+'State'
            ;
        requireAry.push(stateJsName);
    }

    require(requireAry, function() {
        //alert('加载-listState-了啊……');

        avalon.history.start({
            basepath: "/mmRouter"
        });
        avalon.scan();
    });
    //define(function(require){
    //    require('listState');
    //    require('b');
        //console.log('listStateall');
    //});

    //go!!!!!!!!!

    //require(['listState'], function (listState) {
    //    console.log(listState);
    //})




});

//require.config({
////第一块，配置
//    baseUrl : '',
//    paths   : {
//        jquery  : 'vendor/jquery/jquery-2.1.1',
//        avalon  : "vendor/avalon/avalon",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
//        text    : 'vendor/require/text',
//        domReady: 'vendor/require/domReady',
//        css     : 'vendor/require/css.js'
//    },
//    priority: ['text', 'css'],
//    shim    : {jquery: {exports: "jQuery"}, avalon: {exports: "avalon"}}
//});
//require(['avalon', "domReady!"], function () {
//    //第二块，添加根VM（处理共用部分）
//    avalon.log("加载avalon完毕，开始构建根VM与加载其他模块")
//    avalon.templateCache.empty = " ";
//    avalon.define({
//        $id   : "root", header: "这是根模块，用于放置其他模块都共用的东西，比如<b>用户名</b>什么的",
//        footer: "页脚消息", page: "empty"
//    })
//    avalon.scan(document.body)
//    require(['./modules/aaa/aaa'], function () {
//        //第三块，加载其他模块		avalon.log("加载其他完毕")
//    });
//});

