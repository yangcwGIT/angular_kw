/**
 * Created by Guoxing.han on 2015/6/17 0017.
 */
angular.module('spApp')
    .controller('businessCtrl', ['$scope', 'userAgent', function ($scope, userAgent) {
        var lwtDiv = document.getElementById("businessPages"),
            width = lwtDiv.offsetWidth * 2;
        if (lwtDiv.offsetWidth = 414) {
            width = lwtDiv.offsetWidth * 3
        }
        $scope.style = {
            'h_bg':{
                'background': '#6342c4'
            },
            'b_bg':{
                'background': '#ececec'
            }
        };
        $scope.Static = {
            imgs_h: {
                imgs_1: 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_business_01.jpg' + '?imageView2/2/w/' + width
            },
            imgs_r:'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_arrow.png',
            imgs_u: {
                imgs_1 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_business_03.jpg' + '?imageView2/2/w/' + width,
                imgs_2 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_business_04.jpg' + '?imageView2/2/w/' + width,
                imgs_3 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_business_05.jpg' + '?imageView2/2/w/' + width,
                imgs_4 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_business_06.jpg' + '?imageView2/2/w/' + width,
                imgs_5 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_business_07.jpg' + '?imageView2/2/w/' + width,
                imgs_6 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_business_08.jpg' + '?imageView2/2/w/' + width,
                imgs_7 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_business_09.jpg' + '?imageView2/2/w/' + width,
                imgs_8 : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/lecturer_business_10.jpg' + '?imageView2/2/w/' + width
            },
            userId: {
                user_1: '3092',
                user_2: '3670',
                user_3: '2231',
                user_4: '3761',
                user_5: '2206',
                user_6: '3531',
                user_7: '3788',
                user_8: '3854'
            }
        };
        $scope.$on('$viewContentLoaded', function () {
            userAgent = new userAgent();
        });
    }]);