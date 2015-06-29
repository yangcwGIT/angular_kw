/**
 * Created by Guoxing.han on 2015/6/17 0017.
 */
angular.module('spApp')
    .controller('taodaCtrl', ['$scope', '$rootScope', 'userAgent', function ($scope, $rootScope, userAgent) {
        var lwtDiv = document.getElementById("lecturerPages"),
            width = lwtDiv.offsetWidth * 2;
        if (lwtDiv.offsetWidth = 414) {
            width = lwtDiv.offsetWidth * 3
        }
        $scope.style = {
            'background': '#166da6'
        };
        $scope.Static = {
            imgs_h: {
                imgs_1: 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_taodao_01.png' + '?imageView2/2/w/' + width,
                imgs_2: 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_taodao_02.png' + '?imageView2/2/w/' + width,
                imgs_3: 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_taodao_03.png' + '?imageView2/2/w/' + width
            },
            imgs_u: {
                imgs_1 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_taodao_04.png' + '?imageView2/2/w/' + width,
                imgs_2 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_taodao_05.png' + '?imageView2/2/w/' + width,
                imgs_3 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_taodao_06.png' + '?imageView2/2/w/' + width,
                imgs_4 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_taodao_07.png' + '?imageView2/2/w/' + width,
                imgs_5 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_taodao_08.png' + '?imageView2/2/w/' + width,
                imgs_6 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_taodao_09.png' + '?imageView2/2/w/' + width,
                imgs_7 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_taodao_10.png' + '?imageView2/2/w/' + width,
                imgs_8 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_taodao_11.png' + '?imageView2/2/w/' + width,
                imgs_9 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_taodao_12.png' + '?imageView2/2/w/' + width,
                imgs_10: 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_taodao_13.png' + '?imageView2/2/w/' + width
            },
            userId: {
                user_1: '470',
                user_2: '402',
                user_3: '526',
                user_4: '407',
                user_5: '441',
                user_6: '462',
                user_7: '447',
                user_8: '411',
                user_9: '436',
                user_10: '424'
            }
        };
        $scope.$on('$viewContentLoaded', function () {
            userAgent = new userAgent();
        });
    }]);