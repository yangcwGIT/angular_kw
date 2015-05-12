/**
 * Created by han on 15-5-8.
 */
angular.module('spApp')
    .controller('monthstarCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        var lwtDiv = document.getElementById("actPages"),
            width = lwtDiv.offsetWidth * 2;
        if(lwtDiv.offsetWidth=414){
            width = lwtDiv.offsetWidth * 3
        }
        $scope.style = {
            'background'    : '#f3f6fb',
            'padding-bottom': '10px'

        };
        $rootScope.title = '本月大明星';
        $scope.Datas = {
            images: {
                imgs_header: ['http://ad-ikaowo.qiniudn.com/Maystars_01.png' + '?imageView2/2/w/' + width],
                imgs_1     : ['http://ad-ikaowo.qiniudn.com/Maystars_02.png' + '?imageView2/2/w/' + width],
                imgs_2     : ['http://ad-ikaowo.qiniudn.com/Maystars_03.png' + '?imageView2/2/w/' + width],
                imgs_3     : ['http://ad-ikaowo.qiniudn.com/Maystars_04.png' + '?imageView2/2/w/' + width],
                imgs_4     : ['http://ad-ikaowo.qiniudn.com/Maystars_05.png' + '?imageView2/2/w/' + width],
                imgs_5     : ['http://ad-ikaowo.qiniudn.com/Maystars_06.png' + '?imageView2/2/w/' + width],
                imgs_6     : ['http://ad-ikaowo.qiniudn.com/Maystars_07.png' + '?imageView2/2/w/' + width],
                imgs_7     : ['http://ad-ikaowo.qiniudn.com/Maystars_08.png' + '?imageView2/2/w/' + width],
                imgs_8     : ['http://ad-ikaowo.qiniudn.com/Maystars_09.png' + '?imageView2/2/w/' + width],
                imgs_9     : ['http://ad-ikaowo.qiniudn.com/Maystars_10.png' + '?imageView2/2/w/' + width]
            },
            userId: {
                user_1: ['408'],
                user_2: ['438'],
                user_3: ['446'],
                user_4: ['462'],
                user_5: ['840'],
                user_6: ['664'],
                user_7: ['2178'],
                user_8: ['2073'],
                user_9: ['1565']
            }


        };

    }]);