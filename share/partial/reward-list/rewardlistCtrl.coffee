angular.module 'share'
.controller 'rewardlistCtrl', ['$scope', '$rootScope', 'rewardPages', '$state', '_','userAgent',
    ($scope, $rootScope, rewardPages, $state, _,userAgent)->
        maindiv = document.getElementById("main")
        width = maindiv.offsetWidth * 2
        isApp = $state.params.isApp
        input =
            pro_u_id: $state.params.pro_u_id
            client_u_id: $state.params.client_u_id
            tip_nx_type: $state.params.tip_nx_type
            tip_nx_id: $state.params.tip_nx_id

            start_page: 0
            datas_num: 1000
        rewardPages.allGet(input, (err, datas)->
            $scope.Datas =
                imgs: [
                    'http://ad-ikaowo.qiniudn.com/reward-listTop.png' + '?imageView2/2/w/' + width
                ]


            return alert err.datas.msg if err
            #console.log datas.client
            #页面加载数据
            console.log input.start_page


            $scope.Datas.gotNums = datas.client.got_num
            $scope.Datas.totals = datas.client.totals

            $scope.Datas.clList = datas.client.list

            $scope.Datas.uisOb = datas.client.uisOb
            $scope.Datas.nicknamesOb = datas.client.nicknamesOb

            $rootScope.title = "Ta收到的打赏记录"
            $rootScope.content = "#{datas.client.nicknamesOb[input.pro_u_id]}收到的打赏记录"
        )
        $scope.$on '$viewContentLoaded', ()->
            #判断是否在app内
            if isApp is "true"
                userAgent = new userAgent();
]