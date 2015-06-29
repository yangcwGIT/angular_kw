/**
 * Created by jyo on 15-3-19.
 */
angular.module('kaowoApp')
    .controller('tumblrCtrl', ['$scope', '$stateParams', '$state', 'kaowoService', '_', '$sce', '$timeout', 'userAgent', '$rootScope', function ($scope, $stateParams, $state, kaowoService, _, $sce, $timeout, userAgent, $rootScope) {

        $scope.Datas = {};
        var getParamas = {
            u_id: ($state.params.u_id),
            imgw: $state.params.imgw
        }, k = $state.params.kk, urlCuid = $state.params.cuid, version = $state.params.version;


        $scope.trustSrc = function (src) {
            return $sce.trustAsResourceUrl(src);
        };
        async.parallel({
            'tumblrGet'    : function (nexta) {
                kaowoService.tumblr.get({u_id: getParamas.u_id}, function (data) {
                    var mp4Ary = [], imgObList = [];
                    _.forEach(data.tumblr, function (value, index) {

                        var isVideo = value['tbr_img'].indexOf('.mp4') > (-1);
                        value['u_id'] = getParamas.u_id;
                        if (isVideo) {

                            mp4Ary.push(value);
                        } else {
                            data.tumblr[index]['tbr_img'] += '?imageView2/2/w/' + (parseInt($state.params.imgw) + 200);
                            imgObList.push(data.tumblr[index]);
                        }
                    });
                    return nexta(null, {
                        imgObList: imgObList,
                        mp4List  : mp4Ary
                    });
                }, function () {
                    return nexta('tumblr,error')
                })
            },

            'ui_summaryGet': function (nexta) {
                kaowoService.ui_summary.get({u_id: getParamas.u_id}, function (data) {
                    $scope.Datas.alPrice = data.user_info.al_price;
                    $scope.Datas.price = data.user_info.price;
                    $rootScope.content = data.user_info.ui_summary;
                    $rootScope.title = data.user_info.nickname + " - 「靠我」智慧交易平台";
                    window.location.href = "kaowo://location-end?title=" + $rootScope.title + "&description=" + $rootScope.content;

                    data.user_info.rich_summary = data.user_info.rich_summary.replace(/\r\n|\r|\n/gi, '<br />');
                    data.user_info.rich_summary = data.user_info.rich_summary.replace(/<br \/><br \/>|<br \/><br \/><br \/>|<br \/><br \/><br \/><br \/>/gi, '<br/>');

                    //console.log(data.user_info.rich_summary);
                    return nexta(null, data.user_info.rich_summary)
                }, function () {
                    return nexta('rich_summary,error')
                })
            },
            'tagsGet'      : function (nexta) {
                kaowoService.tags.get({u_id: getParamas.u_id}, function (data) {
                    return nexta(null, data.tags)
                }, function () {
                    return nexta('tags,error')
                })
            }


        }, function (err, results) {
            if (err) return alert(err);
            $scope.Datas['tags'] = results.tagsGet;
            $scope.Datas['ui_summary'] = results.ui_summaryGet;
            $scope.Datas['tumblr'] = results['tumblrGet']['imgObList'];
            $scope.Datas['mp4'] = results['tumblrGet']['mp4List'];


        });
        //优惠码
        if (urlCuid) {
            $scope.getCoupon = true;
            $scope.couponDetails = false;
            $scope.showBox = true;
            $scope.showNext = true;
            //console.log($state.params.cuid, getParamas.u_id);

            $scope.getCoupon = false;
            $scope.client_uid = urlCuid;
            kaowoService.couponAsk.get({
                clientuid: $scope.client_uid,
                prouid   : getParamas.u_id
            }, function (data) {
                $scope.Datas.alPrice = data.finallyAskPrice;
                $scope.Datas.couponPrice = data.al_price - data.coupon_price;
                if ($scope.Datas.couponPrice <= 0) {
                    $scope.Datas.couponPrice = data.al_price
                }
                $scope.couponDetails = true;

            }, function () {
                $scope.getCoupon = true;
                $scope.getPromo = function () {
                    $scope.showBox = false;
                    $scope.showNext = false;
                    $scope.style = {
                        'background': '#ddd'
                    };
                    $scope.Datas.u_name = '此';
                };
                $scope.closePromo = function () {
                    $scope.showBox = true;
                    $scope.toRewardBtn = true;
                    $scope.toOverBtn = true;
                    $scope.showBox = true;
                    $scope.showNext = true;
                    $scope.style = {
                        'background': '#ddd'
                    };
                    $scope.Datas.yourPhone = '';
                    $scope.Datas.promoCode = '';
                };
                $scope.$watch('Datas.promoCode', function (val) {
                    if (val) {
                        $scope.toOverBtn = false;
                        $scope.style = {
                            'background': '#41c0c2'
                        };
                        //console.log(val, $state.params.cuid, getParamas.u_id);
                        $scope.dataForm = function () {
                            kaowoService.couponRec.save({
                                pro_u_id   : getParamas.u_id,
                                client_u_id: $state.params.cuid,
                                code_name  : val
                            }, function (data) {
                                console.log(data);
                                $scope.showBox = true;
                                $scope.couponDetails = true;
                                $scope.getCoupon = false;

                                kaowoService.couponAsk.get({
                                    clientuid: $scope.client_uid,
                                    prouid   : getParamas.u_id
                                }, function (data) {
                                    $scope.Datas.alPrice = data.finallyAskPrice;
                                    $scope.Datas.couponPrice = data.al_price - data.coupon_price;
                                    if ($scope.Datas.couponPrice <= 0) {
                                        $scope.Datas.couponPrice = data.al_price
                                    }
                                }, function (err) {
                                    return alert(err.data.msg)
                                })
                            }, function (err) {
                                if (err.data && err.data.msg)
                                    return alert(err.data.msg);
                            })
                        };
                    }
                    else {
                        $scope.toOverBtn = true;
                        $scope.style = {
                            'background': '#ddd'
                        };
                    }


                });
            })

        }
        else {
            var strCookie = document.cookie;
            var arrCookie = strCookie.split("; ");
            var cuidCookies = -1;
            for (var i = 0; i < arrCookie.length; i++) {
                var arr = arrCookie[i].split("=");
                if ("cuid" == arr[0]) {
                    cuidCookies = arr[1];
                    break;
                }
            }
            if (cuidCookies.length > 0) {
                console.log(document.cookie.indexOf("cuid" + "="));
                $scope.getCoupon = true;
                $scope.couponDetails = false;
                $scope.showBox = true;
                $scope.getCoupon = false;

                $scope.client_uid = cuidCookies;
                kaowoService.couponAsk.get({
                    clientuid: $scope.client_uid,
                    prouid   : getParamas.u_id
                }, function (data) {
                    $scope.Datas.alPrice = data.finallyAskPrice;
                    $scope.Datas.couponPrice = data.al_price - data.coupon_price;
                    if ($scope.Datas.couponPrice <= 0) {
                        $scope.Datas.couponPrice = data.al_price
                    }
                    $scope.couponDetails = true;
                }, function (error) {
                    return alert(error)
                })

            }
            else {
                $scope.toRewardBtn = true;
                $scope.toOverBtn = true;
                $scope.showBox = true;
                $scope.showNext = true;
                $scope.style = {
                    'background': '#ddd'
                };
                $scope.getCoupon = true;
                $scope.$watch('Datas.yourPhone', function (tel) {
                    //console.log(tel);
                    var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
                    if (reg.test(tel)) {
                        $scope.toRewardBtn = false;
                        $scope.style = {
                            'background': '#41c0c2'
                        };
                        $scope.phoneNum = tel
                    } else {
                        $scope.toRewardBtn = true;
                        $scope.style = {
                            'background': '#ddd'
                        };
                    }
                });
                $scope.$watch('Datas.promoCode', function (val) {
                    $scope.toOverBtn = false;
                    $scope.style = {
                        'background': '#41c0c2'
                    };
                });
                $scope.getPromo = function () {
                    $scope.showBox = false;
                    $scope.style = {
                        'background': '#ddd'
                    };
                };
                $scope.closePromo = function () {
                    $scope.showBox = true;
                    $scope.toRewardBtn = true;
                    $scope.toOverBtn = true;
                    $scope.showBox = true;
                    $scope.showNext = true;
                    $scope.style = {
                        'background': '#ddd'
                    };
                    $scope.Datas.yourPhone = '';
                    $scope.Datas.promoCode = '';
                };
                $scope.nextForm = function () {
                    kaowoService.byPhone.get({phoneNum: $scope.Datas.yourPhone}, function (data) {
                        //console.log(data);
                        $scope.Datas.u_name = data.nickname + '的';
                        document.cookie = "cuid=" + data.u_id;
                        $scope.localS = data.u_id.toString();
                        $scope.showNext = false;
                        $scope.style = {
                            'background': '#ddd'
                        };
                        $scope.toOverBtn = true;

                    }, function (error) {
                        return alert(error.data.msg)
                    })


                };

                $scope.$watch('Datas.promoCode', function (val) {
                    if (val) {

                        //console.log(val, $scope.localS, getParamas.u_id);
                        $scope.toOverBtn = false;
                        $scope.style = {
                            'background': '#41c0c2'
                        };
                        $scope.dataForm = function () {
                            kaowoService.couponRec.save({
                                client_u_id: $scope.localS,
                                pro_u_id   : getParamas.u_id,
                                code_name  : val
                            }, function (data) {
                                //console.log(data);
                                $scope.showBox = true;
                                $scope.couponDetails = true;
                                $scope.getCoupon = false;

                                kaowoService.couponAsk.get({
                                    clientuid: $scope.localS,
                                    prouid   : getParamas.u_id
                                }, function (data) {
                                    $scope.Datas.alPrice = data.finallyAskPrice;
                                    $scope.Datas.couponPrice = data.al_price - data.coupon_price;
                                    if ($scope.Datas.couponPrice <= 0) {
                                        $scope.Datas.couponPrice = data.al_price
                                    }
                                    //localStorage['cuid'] = $scope.localS;
                                    document.cookie = "cuid=" + $scope.localS;
                                }, function (error) {
                                    return alert(error)
                                })
                            }, function (err) {
                                //console.log(err);
                                if (err.data && err.data.msg)
                                    return alert(err.data.msg);
                            })
                        };
                    }
                    else {
                        $scope.toOverBtn = true;
                        $scope.style = {
                            'background': '#ddd'
                        };
                    }
                });
            }
        }

        $scope.$on('$viewContentLoaded', function () {

            userAgent = new userAgent();
            var maindiv = document.getElementById("main");
            if (k != '1') {
                location.href = 'kaowo://tumblr/size?height=' + maindiv.offsetHeight;
            }
        });

    }]);