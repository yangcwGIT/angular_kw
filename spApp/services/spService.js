/**
 * Created by jyo on 15-3-26.
 */
angular
    .module('spApp')
    .factory('spService', function ($resource, $location) {

        var
            domain = $location.host(),
            env ,host,
            hosts = {
                'dev'   : 'http://192.168.8.107:1333/v1',
                //'dev'   : 'http://api.ikaowo.com/v1',
                'main'  : 'http://api.ikaowo.com/v1',
                'prepro': 'http://api.dev.ikaowo.com/v1'
            },
            domainHosts={
                'm.dev.ikaowo.com':'prepro',
                'm.ikaowo.com':'main',
                '192.168.8.107':'dev'
            };
        env=domainHosts[domain] || 'dev';
        host=hosts[env];
        return {
            recruit:$resource(host+'/mana/apply',{})
        }
    });


//avalon.post(host+'/mana/apply',{
//    nickname:data.name,
//    phone:data.phone,
//    summary:data.summary
//} ).then(function(result) {
//    return cb(null,result);
//});