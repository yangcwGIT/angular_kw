angular.module 'share'
.controller 'rewardmoneyCtrl', ['$scope', '$rootScope', 'rewardPages', '$state', '_', '$timeout', 'userAgent',
    ($scope, $rootScope, rewardPages, $state, _, $timeout, userAgent)->
        maindiv = document.getElementById("main")
        width = maindiv.offsetWidth * 2
        headerImg = document.getElementById("J_headerImg").offsetWidth
        document.getElementById("J_headerImg").style.height = headerImg - 3 + 'px'
        headerImgs = document.getElementById("J_headerImgs").offsetWidth
        document.getElementById("J_headerImgs").style.height = headerImgs + "px"
        isApp = $state.params.isApp
        input =
            pro_u_id: $state.params.pro_u_id
            client_u_id: $state.params.client_u_id
            tip_nx_type: $state.params.tip_nx_type
            tip_nx_id: $state.params.tip_nx_id
        $scope.cls =
            mid:
                children:
                    yes: 'checked'

        $scope.str = {}
        $scope.Datas =
            imgs: [
                'http://ad-ikaowo.qiniudn.com/reward-top.png' + '?imageView2/2/w/' + width
            ]
            moneyNums: []
            maxNum: []
            showMoreNum: yes
        rewardPages.allGet input, (err, datas)->
            return alert err.data.msg if err
            $scope.Datas.moneyNums = datas.cata.cata
            #console.log $scope.Datas.moneyNums
            $scope.Datas.maxNum = String datas.cata.max
            .length
            $scope.Datas.minNum = datas.cata.min
            $scope.Datas.maxNum = datas.cata.max
            $scope.Datas.maxLenght = datas.cata.maxlength
            key = input.pro_u_id
            $scope.Datas.iconOb = datas.cata.iconOb[key] + '?imageView2/2/w/' + Math.round(maindiv.offsetWidth / 2)

            #您将成为第几次打赏Ta的人
            $scope.Datas.pro_got_num = datas.cata.pro_got_num + 1
            #选择金额
            $scope.toRewardBtn = yes
            $scope.toShowtips = no

            #console.log datas.cata.min

            $scope.moneyNum = (num) ->
                $scope.Datas.chosenNum = num

                #console.log num
                if num != 0
                    $scope.toRewardBtn = no
                    document.getElementById("J_long-btn").style.color = "#fff"
                    $scope.Datas.lastMoney = num
            #其他金额
            $scope.showform = no
            $scope.showForm = () ->
                $scope.Datas.chosenNum = no
                num = 0
                $scope.showform = !$scope.showform;
                if num is 0
                    $scope.toRewardBtn = yes
                    document.getElementById("J_long-btn").style.color = "#F49E9E"
                if $scope.Datas.otherMoney > datas.cata.max
                    $scope.toRewardBtn = no

                if $scope.Datas.otherMoney >= datas.cata.min
                    $scope.toRewardBtn = no
                $timeout(->
                    document.getElementById("J_otherNum").focus()
                    1500
                )
            $scope.showFormAll = ->
                $scope.showform = !$scope.showform
                $scope.toShowtips = !$scope.toShowtips

            #输入其他金额
            $scope.toRewardBtn = yes
            #            if oldV !=0
            #                $scope.toRewardBtn = no
            $scope.$watch('Datas.otherMoney', (newV, oldV)->
#                console.log newV, oldV
                if newV isnt oldV
                    if !isNaN newV
                        if newV >= $scope.Datas.minNum and newV <= $scope.Datas.maxNum
                            $scope.toRewardBtn = no
                            $scope.toShowtips = no
                            document.getElementById("J_other-btn").style.color = "#fff"
                        else
                            $scope.toRewardBtn = yes
                            $scope.toShowtips = yes
                            document.getElementById("J_other-btn").style.color = "#F49E9E"
                    else
                        $scope.toRewardBtn = yes
                        document.getElementById("J_other-btn").style.color = "#F49E9E"
            )

            $scope.closeForm = ->
                $scope.Datas.showMoreNum = no
                $scope.showform = no
                $scope.Datas.otherMoneyShow = parseFloat($scope.Datas.otherMoney).toFixed(2)
                #console.log $scope.Datas.otherMoneyShow
                $scope.toRewardBtn = no
                document.getElementById("J_long-btn").style.color = "#fff"
                $scope.Datas.lastMoney = $scope.Datas.otherMoney


            #提交
            $scope.Datas.placeholder = datas.cata.placeholder
            $scope.toReward = ->
                unless $scope.Datas.lastFonts
                    $scope.Datas.lastFonts = datas.cata.placeholder
                #console.log $scope.Datas.lastMoney, $scope.Datas.lastFonts,input.pro_u_id,input.client_u_id,input.tip_nx_type,input.tip_nx_id
                $scope.toRewardBtn = yes
                document.getElementById("J_other-btn").style.color = "#F49E9E"
                saveData =
                    client_u_id: input.client_u_id
                    pro_u_id: input.pro_u_id
                    tip_price: $scope.Datas.lastMoney
                    tip_nx_type: input.tip_nx_type
                    tip_nx_id: input.tip_nx_id
                    tip_content: $scope.Datas.lastFonts
                rewardPages.TipCreate.save(saveData,
                    (data)->
                        window.location.href = "kaowo://reward-tipdatas/#{data.re.tip_id}"
                        $scope.toRewardBtn = yes
                        document.getElementById("J_other-btn").style.color = '#F49E9E'
                    (err)->
                        console.log 'err:', err
                )

            $rootScope.title = '选择打赏金额'
            $rootScope.content = '选择打赏金额'
        $scope.$on '$viewContentLoaded', ()->
            #判断是否在app内
            if isApp is "true"
                userAgent = new userAgent();
]