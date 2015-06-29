/**
 * Created by Guoxing.han on 2015/6/17 0017.
 */
angular.module('spApp')
    .controller('startupCtrl', ['$scope', '$rootScope', 'userAgent', function ($scope, $rootScope, userAgent) {
        var lwtDiv = document.getElementById("startupPages"),
            width = lwtDiv.offsetWidth * 2;
        if (lwtDiv.offsetWidth = 414) {
            width = lwtDiv.offsetWidth * 3
        }
        $scope.style = {
            'h_bg': {
                'background': '#098dc6'
            },
            'b_bg': {
                'background': '#ececec'
            }

        };
        $scope.Static = {
            imgs_h: {
                imgs_1: 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_startup_01.jpg' + '?imageView2/2/w/' + width
            },
            imgs_r:'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_arrow.png',
            imgs_u: {
                imgs_1 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_startup_02.jpg' + '?imageView2/2/w/' + width,
                imgs_2 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_startup_03.jpg' + '?imageView2/2/w/' + width,
                imgs_3 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_startup_04.jpg' + '?imageView2/2/w/' + width,
                imgs_4 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_startup_05.jpg' + '?imageView2/2/w/' + width,
                imgs_5 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_startup_06.jpg' + '?imageView2/2/w/' + width,
                imgs_6 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_startup_07.jpg' + '?imageView2/2/w/' + width,
                imgs_7 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_startup_08.jpg' + '?imageView2/2/w/' + width,
                imgs_8 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_startup_09.jpg' + '?imageView2/2/w/' + width,
                imgs_9 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_startup_10.jpg' + '?imageView2/2/w/' + width,
                imgs_10: 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_startup_11.jpg' + '?imageView2/2/w/' + width,
                imgs_11: 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_startup_12.jpg' + '?imageView2/2/w/' + width,
                imgs_12: 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_startup_13.jpg' + '?imageView2/2/w/' + width,
                imgs_13: 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_startup_14.jpg' + '?imageView2/2/w/' + width,
                imgs_14: 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_startup_15.jpg' + '?imageView2/2/w/' + width,
                imgs_15: 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_startup_16.jpg' + '?imageView2/2/w/' + width
            },
            userId: {
                user_1 : '843',
                user_2 : '2362',
                user_3 : '3559',
                user_4 : '2263',
                user_5 : '3524',
                user_6 : '3523',
                user_7 : '3695',
                user_8 : '3497',
                user_9 : '1118',
                user_10: '3292',
                user_11: '3747',
                user_12: '3339',
                user_13: '3864',
                user_14: '3072',
                user_15: '3419'
            }
        };
        $scope.$on('$viewContentLoaded', function () {
            userAgent = new userAgent();
        });
    }]);