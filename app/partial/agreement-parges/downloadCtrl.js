/**
 * Created by Guoxing.han on 2015/6/18 0018.
 */
angular.module('kaowoApp')
    .controller('downloadCtrl', ['$scope','$timeout', function ($scope,$timeout) {
        var url = location.href;
        var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
        window.location.href = ('kaowo://user/mainpage?uid='+paraString);
        $timeout(function () {
            window.location.href = ('http://fir.im/kaowo')
        }, 100);

    }])