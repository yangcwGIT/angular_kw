/**
 * Created by jyo on 15-3-19.
 */
angular
    .module('kaowoApp')
    .factory('kaowoService', [ '$resource','$location','Domains',function ($resource, $location, dd) {
        
        var
            domain = $location.host(),
            env ,host
            hosts = {
                'dev'   : 'http://192.168.8.107:1333/v1',
                //'dev'   : 'http://api.ikaowo.com/v1',
                'main'  : 'http://api.ikaowo.com/v1',
                'prepro': 'http://api.dev.ikaowo.com/v1'
            },
            domainHosts={
                'm.dev.ikaowo.com': 'prepro',
                'local2dev.ikaowo.com':'prepro',
                'm.ikaowo.com': 'main',
                'local2main.ikaowo.com':'main',
                '192.168.8.107': 'dev'
            };
        env=domainHosts[domain] || 'dev';
        host=hosts[env];

        return {
            tumblr:$resource(host+'/user/tumblr/:u_id',{}),
            summary:$resource(host+'/user/summary/:u_id',{}),
            ui_summary:$resource(host+'/user_info/:u_id',{}),
            tags:$resource(host+'/tags/:u_id',{}),
            prosD:$resource(host+'/pro/d',{}),
            //获取推荐智客
            rcmdtPros:$resource(host+'/nxrcmdt/pros/:cp/:ps',{}),
            //获取爆款智客
            rcmdtHotSell:$resource(host+'/recommend/hotsell',{}),
            recommend:$resource('',{},{
                gopros:{
                    //url:'http://192.168.8.107:1331/recommend/pros/:cata'
                    url:dd['ms']+'/recommend/pros/:cata'
                }
            }),

            //祈祷
            prayPage:$resource(dd['ms']+'/adh5/candle',{}),

            //优惠码
            couponAsk:$resource(host+'/coupon/ask/:clientuid/:prouid',{}),
            byPhone:$resource(host+'/user/byphone/:phoneNum',{}),
            //couponRec:$resource('http://api.dev.ikaowo.com/v1/getui',{})
            couponRec:$resource(host+'/coupon/recipient',{})

        }
}]);