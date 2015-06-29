/**
 * Created by Guoxing.han on 15-6-23.
 */
angular.module('kaowoApp')
    .controller('oneyuanCtrl', ['$scope', 'userAgent', function ($scope, userAgent) {

        var height = (window.innerHeight), width = (window.innerWidth) * 2;
        //alert((width/2)/height);

        $scope.imgs = {
            'more': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-more.png',
            'p1_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-01.png?imageMogr2/thumbnail/' + width,
            'p2_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-02_01.png?imageMogr2/thumbnail/' + width,
            'p2_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-02_02.png?imageMogr2/thumbnail/' + width,
            'p3_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-03_01.png?imageMogr2/thumbnail/' + width,
            'p3_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-03_02.png?imageMogr2/thumbnail/' + width,
            'p4_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-04_01.png?imageMogr2/thumbnail/' + width,
            'p4_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-04_02.png?imageMogr2/thumbnail/' + width,
            'p4_3': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-04_03.png?imageMogr2/thumbnail/' + width,
            'p5_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-05_01.png?imageMogr2/thumbnail/' + width,
            'p5_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-05_02.png?imageMogr2/thumbnail/' + width,
            'p5_3': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-05_03.png?imageMogr2/thumbnail/' + width,
            'p6_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-06_01.png?imageMogr2/thumbnail/' + width,
            'p6_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-06_02.png?imageMogr2/thumbnail/' + width,
            'p6_3': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-06_03.png?imageMogr2/thumbnail/' + width

        };
        if((width/2)/height>0.63){
            $scope.imgs = {
                'more': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-more.png',
                'p1_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-01_1.png?imageMogr2/thumbnail/' + width,
                'p2_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-02_01.png?imageMogr2/thumbnail/' + width,
                'p2_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-02_02.png?imageMogr2/thumbnail/' + width,
                'p3_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-03_01.png?imageMogr2/thumbnail/' + width,
                'p3_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-03_02.png?imageMogr2/thumbnail/' + width,
                'p4_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-04_01.png?imageMogr2/thumbnail/' + width,
                'p4_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-04_02.png?imageMogr2/thumbnail/' + width,
                'p4_3': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-04_03.png?imageMogr2/thumbnail/' + width,
                'p5_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-05_01.png?imageMogr2/thumbnail/' + width,
                'p5_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-05_02.png?imageMogr2/thumbnail/' + width,
                'p5_3': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-05_03.png?imageMogr2/thumbnail/' + width,
                'p6_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-06_01.png?imageMogr2/thumbnail/' + width,
                'p6_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-06_02.png?imageMogr2/thumbnail/' + width,
                'p6_3': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/one-yuan-vip-06_03.png?imageMogr2/thumbnail/' + width

            };

        }
        $scope.Static = {
            userId: [980,1031,513,440,2608,1187,2688,720,563,1298,2638,953,423]
        };
        $scope.$on('$viewContentLoaded', function () {
            userAgent = new userAgent();

            var fp;

            $(function () {
                if((width/2)/height>0.63){
                    $("#J_p1Btn").addClass('btn_1');
                }
                fp = $('#dowebok').fullpage({
                    continuousVertical: false,
                    afterLoad         : function (anchorLink, index) {
                        console.log(index);
                        if(index==1){
                            $("#J_p1Btn").click(function(){
                                var _height = document.body.scrollHeight + 3;
                                $("body").removeClass().addClass("fp-viewing-1");
                                $(".section1").removeClass("active");
                                $(".section2").addClass("active");
                                $("#dowebok").css({'transform': 'translate3d(0px, -'+_height+'px, 0px)'},{'-webkit-transform':' translate3d(0px, -'+_height+'px, 0px)'});
                                if((width/2)/height>0.63){
                                    $('.page2').find('.p1').delay(200).animate({
                                        'margin-top': '-3%', opacity: 1
                                    }, 1500, 'easeOutExpo');
                                    $('.page2').find('.p2').delay(500).animate({
                                        'margin-top': '-3%', opacity: 1
                                    }, 1500, 'easeOutExpo');
                                }
                                else{
                                    $('.page2').find('.p1').delay(200).animate({
                                        'margin-top': 0, opacity: 1
                                    }, 1500, 'easeOutExpo');
                                    $('.page2').find('.p2').delay(500).animate({
                                        'margin-top': 0, opacity: 1
                                    }, 1500, 'easeOutExpo');
                                }
                            });
                        }
                        else if (index == 2) {
                            if((width/2)/height>0.63){
                                $('.page2').find('.p1').delay(200).animate({
                                    'margin-top': '-3%', opacity: 1
                                }, 1500, 'easeOutExpo');
                                $('.page2').find('.p2').delay(500).animate({
                                    'margin-top': '-3%', opacity: 1
                                }, 1500, 'easeOutExpo');
                            }
                            else{
                                $('.page2').find('.p1').delay(200).animate({
                                    'margin-top': 0, opacity: 1
                                }, 1500, 'easeOutExpo');
                                $('.page2').find('.p2').delay(500).animate({
                                    'margin-top': 0, opacity: 1
                                }, 1500, 'easeOutExpo');
                            }
                        }
                        else if (index == 3) {
                            if((width/2)/height>0.63){
                                $('.page3').find('.p1').delay(200).animate({
                                    'margin-top': '-3%', opacity: 1
                                }, 1500, 'easeOutExpo');
                                $('.page3').find('.p2').delay(500).animate({
                                    'margin-top': '-3%', opacity: 1
                                }, 1500, 'easeOutExpo');
                            }
                            else{
                                $('.page3').find('.p1').delay(200).animate({
                                    'margin-top': 0, opacity: 1
                                }, 1500, 'easeOutExpo');
                                $('.page3').find('.p2').delay(500).animate({
                                    'margin-top': 0, opacity: 1
                                }, 1500, 'easeOutExpo');
                            }
                        }
                        else if (index == 4) {
                            if((width/2)/height>0.63){
                                $('.page4').find('.p1').delay(200).animate({
                                    'margin-top': '-2%', opacity: 1
                                }, 1000, 'easeOutExpo');
                                $('.page4').find('.p2').delay(400).animate({
                                    'margin-top': '-7%', opacity: 1
                                }, 1000, 'easeOutExpo');
                                $('.page4').find('.p3').delay(600).animate({
                                    'margin-top': '-7%', opacity: 1
                                }, 1000, 'easeOutExpo');
                            }
                            else{
                                $('.page4').find('.p1').delay(200).animate({
                                    'margin-top': 0, opacity: 1
                                }, 1000, 'easeOutExpo');
                                $('.page4').find('.p2').delay(400).animate({
                                    'margin-top': '-4%', opacity: 1
                                }, 1000, 'easeOutExpo');
                                $('.page4').find('.p3').delay(600).animate({
                                    'margin-top': '-4%', opacity: 1
                                }, 1000, 'easeOutExpo');
                            }
                        }
                        else if (index == 5) {
                            if((width/2)/height>0.63) {
                                $('.page5').find('.p1').delay(200).animate({
                                    'margin-top': '-2%', opacity: 1
                                }, 1000, 'easeOutExpo');
                                $('.page5').find('.p2').delay(400).animate({
                                    'margin-top': '-3%', opacity: 1
                                }, 1000, 'easeOutExpo');
                                $('.page5').find('.p3').delay(600).animate({
                                    'margin-top': '-3%', opacity: 1
                                }, 1000, 'easeOutExpo');
                            }
                            else{
                                $('.page5').find('.p1').delay(200).animate({
                                    'margin-top': 0, opacity: 1
                                }, 1000, 'easeOutExpo');
                                $('.page5').find('.p2').delay(400).animate({
                                    'margin-top': '-2%', opacity: 1
                                }, 1000, 'easeOutExpo');
                                $('.page5').find('.p3').delay(600).animate({
                                    'margin-top': '-2%', opacity: 1
                                }, 1000, 'easeOutExpo');
                            }
                        }
                        else if (index == 6) {
                            if((width/2)/height>0.63) {
                                $('.page6').find('.p1').delay(200).animate({
                                    'margin-top': '-3%', opacity: 1
                                }, 1000, 'easeOutExpo');
                                $('.page6').find('.p2').delay(400).animate({
                                    'margin-top': '-5%', opacity: 1
                                }, 1000, 'easeOutExpo');
                                $('.page6').find('.p3').delay(600).animate({
                                    'margin-top': '-3%', opacity: 1
                                }, 1000, 'easeOutExpo');
                            }
                            else{

                                $('.page6').find('.p1').delay(200).animate({
                                    'margin-top': 0, opacity: 1
                                }, 1000, 'easeOutExpo');
                                $('.page6').find('.p2').delay(400).animate({
                                    'margin-top': '-2%', opacity: 1
                                }, 1000, 'easeOutExpo');
                                $('.page6').find('.p3').delay(600).animate({
                                    'margin-top': '-2%', opacity: 1
                                }, 1000, 'easeOutExpo');
                            }
                        }

                    },
                    onLeave           : function (index, direction) {
                        if (index == 2) {
                        }

                    }
                });
            });
        });
    }]);
