angular.module 'share'
.controller 'rewardnullCtrl', ['$scope', '$rootScope','userAgent',
    ($scope, $rootScope,userAgent)->
        maindiv = document.getElementById("main")
        width = maindiv.offsetWidth * 2
        $scope.Datas =
            imgs: [
                'http://7xaw9f.com2.z0.glb.qiniucdn.com/dashang_null_01.png' + '?imageView2/2/w/' + width
            ]
        $rootScope.title = 'Ta暂时未收到打赏'
        $rootScope.content = 'Ta暂时未收到打赏'

        $scope.$on '$viewContentLoaded', ()->
            #判断是否在app内
            url = location.href
            paraString = url.substring(url.indexOf("?") + 1, url.length).split("&")
            $scope.showShare = false
            for paraString in paraString when paraString is "isApp=true"
                userAgent = new userAgent();
]