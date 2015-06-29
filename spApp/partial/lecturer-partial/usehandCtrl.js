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
            'background': '#dee4d6'
        };
        $scope.Static = {
            imgs_h: {
                imgs_1: 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_usehand_01.jpg' + '?imageView2/2/w/' + width,
                imgs_2: 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_usehand_02.jpg' + '?imageView2/2/w/' + width
            },
            imgs_u: {
                imgs_1 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_usehand_03.jpg' + '?imageView2/2/w/' + width,
                imgs_2 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_usehand_04.jpg' + '?imageView2/2/w/' + width,
                imgs_3 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_usehand_05.jpg' + '?imageView2/2/w/' + width,
                imgs_4 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_usehand_06.jpg' + '?imageView2/2/w/' + width,
                imgs_5 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_usehand_07.jpg' + '?imageView2/2/w/' + width,
                imgs_6 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_usehand_08.jpg' + '?imageView2/2/w/' + width,
                imgs_7 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_usehand_09.jpg' + '?imageView2/2/w/' + width,
                imgs_8 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_usehand_10.jpg' + '?imageView2/2/w/' + width,
                imgs_9 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_usehand_11.jpg' + '?imageView2/2/w/' + width,
                imgs_10: 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_usehand_12.png' + '?imageView2/2/w/' + width
            },
            userId: {
                user_1: '1024',
                user_2: '855',
                user_3: '1768',
                user_4: '825',
                user_5: '1315',
                user_6: '1078',
                user_7: '433',
                user_8: '694',
                user_9: '1075',
                user_10: '2619'
            }
        };
        $scope.$on('$viewContentLoaded', function () {
            userAgent = new userAgent();
        });
    }]);