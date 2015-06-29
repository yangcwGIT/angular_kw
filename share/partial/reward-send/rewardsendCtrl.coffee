angular.module 'share'
.controller 'rewardsendCtrl', ['$scope', '$rootScope', 'rewardPages', '$state', '$timeout', 'userAgent',
    ($scope, $rootScope, rewardPages, $state, $timeout, userAgent)->
        maindiv = document.getElementById("main")
        width = maindiv.offsetWidth * 2
        isApp = $state.params.isApp
        input =
            tip_id: $state.params.tip_id
            tip_type: $state.params.tip_type
        #        console.log input.tip_id,input.tip_type
        $scope.Datas =
            imgs: [
                'http://ad-ikaowo.qiniudn.com/reward-top.png' + '?imageView2/2/w/' + width
            ]
            forNum: []
            tipPrice: []
            tipContent: []
        rewardPages.allGet(input, (err, datas)->
            return alert err.datas.msg if err
            $scope.Datas.proId = datas.tip.tip.pro_u_id
            $scope.Datas.clientId = datas.tip.tip.client_u_id

            $scope.Datas.forNum = datas.tip.tip.for_num
            $scope.Datas.gotNum = datas.tip.tip.got_num

            $scope.Datas.clientName = datas.tip.nicknamesOb[$scope.Datas.clientId]
            $scope.Datas.proName = datas.tip.nicknamesOb[$scope.Datas.proId]

            if input.tip_type == "pro"
                $scope.Datas.topfonts = "您是第 #{$scope.Datas.forNum} 次打赏#{$scope.Datas.proName}的人"
                $scope.Datas.iconsOb = datas.tip.iconsOb[$scope.Datas.proId] + '?imageView2/2/w/' + Math.round(maindiv.offsetWidth / 2)
                $rootScope.title = $rootScope.title_share = "你给" + $scope.Datas.proName + "的打赏"

            else if input.tip_type == "client"
                $scope.Datas.topfonts = "#{$scope.Datas.clientName}是第 #{$scope.Datas.gotNum} 次打赏你的人"
                $scope.Datas.iconsOb = datas.tip.iconsOb[$scope.Datas.clientId] + '?imageView2/2/w/' + Math.round(maindiv.offsetWidth / 2)
                $rootScope.title = $rootScope.title_share = "来自" + $scope.Datas.clientName + "的打赏"

            else if input.tip_type == "success"
                $scope.Datas.topfonts = "您成为了第 #{$scope.Datas.forNum} 次打赏#{$scope.Datas.proName}的人"
                $rootScope.title_share = "成功打赏了#{$scope.Datas.proName}"
                $scope.Datas.iconsOb = datas.tip.iconsOb[$scope.Datas.proId] + '?imageView2/2/w/' + Math.round(maindiv.offsetWidth / 2)
                $rootScope.title = "成功打赏"

            $scope.Datas.tipPrice = datas.tip.tip.tip_price
            $scope.Datas.tipContent = datas.tip.tip.tip_content
            $scope.Datas.tipContent = datas.tip.tip.tip_content
            $scope.Datas.tipTyp = input.tip_type
            $scope.Datas.tipId = $state.params.tip_id

            $rootScope.content = "#{datas.tip.tip.tip_content}"
            #判断是否在app内
            $scope.showShare = $scope.showFiex = false
            if isApp is "true"
                $scope.showShare = true
                $scope.showFiex = true
                if input.tip_type == "pro"
                    $scope.Datas.topfonts = "您是第 #{$scope.Datas.forNum} 次打赏Ta的人"

                else if input.tip_type == "client"
                    $scope.Datas.topfonts = "Ta是第 #{$scope.Datas.gotNum} 次打赏你的人"

                else if input.tip_type == "success"
                    $scope.Datas.topfonts = "您成为了第 #{$scope.Datas.forNum} 次打赏Ta的人"
            $scope.Btns =
                hideFiex: ->
                    $scope.showFiex = true
                schema: ()->
                    window.location.href = ('kaowo://main')
                    $timeout(
                        ()->
                            window.location.href = ('http://fir.im/kaowo')
                    , 100, yes)
        )

        $scope.$on '$viewContentLoaded', ()->
            headerImg = document.getElementById("J_headerImg").offsetWidth
            document.getElementById("J_headerImg").style.height = headerImg - 3 + "px"
            headerImgs = document.getElementById("J_headerImgs").offsetWidth
            document.getElementById("J_headerImgs").style.height = headerImgs + "px"
            #判断是否在app内
            $scope.showShare = false
            if isApp is "true"
                userAgent = new userAgent();
]