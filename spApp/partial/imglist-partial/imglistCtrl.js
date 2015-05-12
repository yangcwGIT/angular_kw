/**
 * Created by jyo on 15-4-3.
 */
angular.module('spApp')
    .controller('imglistCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
        var lwtDiv = document.getElementById("imglist"),
            width=lwtDiv.offsetWidth * 2
            ;
        $scope.sty = {
            'background-image':'url(http://ad-ikaowo.qiniudn.com/oneyuan-back.jpg'+'?imageView2/2/w/'+width+')'
        };
        $rootScope.title='1元专享';
        $scope.Datas ={
            imgs:[
                //'http://ad-ikaowo.qiniudn.com/joinus-01.jpg'+'?imageView2/2/w/'+width,
                //'http://ad-ikaowo.qiniudn.com/joinus-02.jpg'+'?imageView2/2/w/'+width,
                //'http://ad-ikaowo.qiniudn.com/joinus-03.jpg'+'?imageView2/2/w/'+width
                'http://ad-ikaowo.qiniudn.com/joinus_01.png'+'?imageView2/2/w/'+width,
                'http://ad-ikaowo.qiniudn.com/joinus_02.png'+'?imageView2/2/w/'+width,
                'http://ad-ikaowo.qiniudn.com/joinus_03.png'+'?imageView2/2/w/'+width,
                'http://ad-ikaowo.qiniudn.com/joinus_04.png'+'?imageView2/2/w/'+width,
                'http://ad-ikaowo.qiniudn.com/joinus_05.png'+'?imageView2/2/w/'+width
             ]
        };

    }]);