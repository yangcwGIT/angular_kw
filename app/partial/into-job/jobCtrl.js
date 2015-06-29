/**
 * Created by Guoxing.han on 15-6-6.
 */
angular.module('kaowoApp')
    .controller('jobCtrl', ['$scope', function ($scope) {

        var height = (window.innerHeight), width = (window.innerWidth) * 2;

        $scope.imgs = {
            'share' : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-share.jpg',
            'more'  : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-more.png',
            'hero01': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-hero01.png?imageMogr2/thumbnail/' + (width - 250),
            'hero02': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-hero02.png?imageMogr2/thumbnail/' + (width - 250),
            'hero03': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-hero03.png?imageMogr2/thumbnail/' + (width - 250),
            'hero04': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-hero04.png?imageMogr2/thumbnail/' + (width - 250),
            'hero05': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-hero05.png?imageMogr2/thumbnail/' + (width - 250),
            'hero06': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-hero06.png?imageMogr2/thumbnail/' + (width - 250),
            'hero07': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-hero07.png?imageMogr2/thumbnail/' + (width - 250),

            'bg1'   : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-bg.png?imageMogr2/thumbnail/' + width,
            'bg2'   : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-bg1.png?imageMogr2/thumbnail/' + width,
            'pag1_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p1_1.png?imageMogr2/thumbnail/' + (width - 100),
            'pag1_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p1_2.png?imageMogr2/thumbnail/' + (width - 200),
            'pag2_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p2_1.png?imageMogr2/thumbnail/' + (width - 250),
            'pag2_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p2_2.png?imageMogr2/thumbnail/' + (width - 100),
            'pag3_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-logo.png?imageMogr2/thumbnail/' + (width - 250),
            'pag3_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p3_1.png?imageMogr2/thumbnail/' + (width - 250),
            'page2' : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/pray-prat_02.png?imageMogr2/thumbnail/' + width,

            'page4_0': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p4_0.png?imageMogr2/thumbnail/' + (width - 250),
            'page4_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p4_1.png?imageMogr2/thumbnail/' + (width - 150),
            'page4_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p4_2.png?imageMogr2/thumbnail/' + (width - 150),
            'page4_3': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p4_3_b.png?imageMogr2/thumbnail/' + (width - 150),
            'page4_4': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p4_4.png?imageMogr2/thumbnail/' + (width - 150),

            'page5_1' : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p5_1.png?imageMogr2/thumbnail/' + width,
            'page6_1' : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p6_1.png?imageMogr2/thumbnail/' + width,
            'page7_1' : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p7_1_b.png?imageMogr2/thumbnail/' + width,
            'page7_2' : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p7_2.png?imageMogr2/thumbnail/' + (width - 250),
            'page8_1' : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p8_1_b.png?imageMogr2/thumbnail/' + width,
            'page9_1' : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p9_1__b.png?imageMogr2/thumbnail/' + width,
            'page10_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p10_1_b.png?imageMogr2/thumbnail/' + width,
            'page10_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p10_2.png?imageMogr2/thumbnail/' + (width - 250),
            'page11_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p11_1__b.png?imageMogr2/thumbnail/' + width,

            'page12_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p12_1.png?imageMogr2/thumbnail/' + (width - 250),
            'page12_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p12_2.png',
            'page12_3': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p12_3.png?imageMogr2/thumbnail/' + width,

            'page13_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p13_1.png',
            'page13_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p13_2.png?imageMogr2/thumbnail/' + (width - 250),
            'page13_3': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p13_3.png?imageMogr2/thumbnail/' + (width - 250),

            'page14_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p14_1.png?imageMogr2/thumbnail/' + (width - 100),
            'page14_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-p14_2.png?imageMogr2/thumbnail/' + (width - 250),

            'to_share': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-share.png'
        };
        //music
        $scope.playMusic=function(){
            var audio = document.getElementById('music');
            if(audio!==null){
                if(audio.paused){
                    audio.play();
                    $("#J_music").removeClass("music-btn2").addClass("music-btn");
                }else{
                    audio.pause();
                    $("#J_music").removeClass("music-btn").addClass("music-btn2");
                }
            }
        }
        $scope.$on('$viewContentLoaded', function () {
            //userAgent = new userAgent();
            $("#J_share").click(function(){
               $(this).hide();
            });
            var fp;

            $(function () {
                $("#J_lastimg").attr("src", $scope.imgs.hero07);
                fp = $('#dowebok').fullpage({
                    continuousVertical: false,
                    afterLoad         : function (anchorLink, index) {
                        //console.log(index);
                        if (index === 1) {
                            $('.section1').find('img.big').delay(10).animate({
                                left: '0'
                            }, 500, 'easeOutExpo');
                            $('.section1').find('img.sm').delay(500).animate({
                                left: '0'
                            }, 500, 'easeOutExpo');
                            $('.section1').find('img.h1').delay(200).fadeIn(1000);
                            $('.section1').find('img.h2').delay(400).fadeIn(1000);
                            $('.section1').find('img.h3').delay(600).fadeIn(1000);
                            $('.section1').find('img.h4').delay(800).fadeIn(1000);
                            $('.section1').find('img.h5').delay(1000).fadeIn(1000);
                            $('.section1').find('img.h6').delay(1200).fadeIn(1000);
                        }
                        else if (index === 5) {
                            $('.section5').find('img.top').delay(50).animate({
                                'margin-left': '10%'
                            }, 500, 'easeOutExpo');
                            $('.section5').find('img.bottom').delay(300).fadeIn(1000);
                        }
                        else if (index === 6) {
                            $('.section6').find('img.top').delay(50).animate({
                                'margin-left': '10%'
                            }, 500, 'easeOutExpo');
                            $('.section6').find('img.bottom').delay(300).fadeIn(1000);
                        }
                        else if (index === 7) {
                            $('.section7').find('img.top').delay(50).animate({
                                'margin-left': '10%'
                            }, 500, 'easeOutExpo');
                            $('.section7').find('img.top_s7').delay(500).animate({
                                'right': '13%'
                            }, 500, 'easeOutExpo');
                            $('.section7').find('img.bottom').delay(300).fadeIn(1000);
                        }
                        else if (index === 8) {
                            $('.section8').find('img.top').delay(50).animate({
                                'margin-left': '10%'
                            }, 500, 'easeOutExpo');
                            $('.section8').find('img.bottom').delay(300).fadeIn(1000);
                        }
                        else if (index === 9) {
                            $('.section9').find('img.top').delay(50).animate({
                                'margin-left': '10%'
                            }, 500, 'easeOutExpo');
                            $('.section9').find('img.bottom').delay(300).fadeIn(1000);
                        }
                        else if (index === 10) {
                            $('.section10').find('img.top').delay(50).animate({
                                'margin-left': '10%'
                            }, 500, 'easeOutExpo');
                            $('.section10').find('img.top_s10').delay(500).animate({
                                'right': '18%'
                            }, 500, 'easeOutExpo');
                            $('.section10').find('img.bottom').delay(300).fadeIn(1000);
                        }
                        else if (index === 11) {
                            $('.section11').find('img.top').delay(50).animate({
                                'margin-left': '10%'
                            }, 500, 'easeOutExpo');
                            $('.section11').find('img.bottom').delay(300).fadeIn(1000);
                            var _height = document.body.scrollHeight + 3;
                            //alert(_height);
                            //$(".link-ck").click(function(){
                            //    $("body").removeClass().addClass("fp-viewing-11");
                            //    $(".section11").removeClass("active");
                            //    $(".section12").addClass("active");
                            //    $("#dowebok").css({'transform': 'translate3d(0px, -'+_height*11+'px, 0px)'},{'-webkit-transform':' translate3d(0px, -'+_height*11+'px, 0px)'});
                            //});
                        }

                        else if (index === 12) {
                            var _bw = $("#J_page12 .b-bg").width();
                            var _height = document.body.scrollHeight + 3;
                            $("#J_page12 .b-bg").height(_bw);
                            var _bt = _bw * .84, _he = _bw * 1.4, _fb = _bw * .66;
                            $("#J_page12 img.men").css("bottom", _bt + "px");
                            $("#J_page12 .all-b").height(_he);
                            $("#J_page12 .all-b p").css("bottom", _fb + "px");

                            $("#J_page12>a").on("click", function () {
                                $("#J_page12>a").removeClass("hover");
                                $(this).addClass("hover");
                                var _va = $("input", this).val();

                                $("body").removeClass().addClass("fp-viewing-12");
                                $(".section12").removeClass("active");
                                $(".section13").addClass("active");
                                $("#dowebok").css({'transform': 'translate3d(0px, -'+_height*12+'px, 0px)'},{'-webkit-transform':' translate3d(0px, -'+_height*12+'px, 0px)'});
                                var _va = $("#J_page12>a.hover>input").val();


                                if (_va == 1) {
                                    $("#J_lastimg").attr("src", $scope.imgs.hero01);
                                    $("#J_lastname").html("已选角色：营销策划");
                                }
                                else if (_va == 2) {
                                    $("#J_lastimg").attr("src", $scope.imgs.hero02);
                                    $("#J_lastname").html("已选角色：平台运营");
                                }
                                else if (_va == 3) {
                                    $("#J_lastimg").attr("src", $scope.imgs.hero03);
                                    $("#J_lastname").html("已选角色：技术");
                                }
                                else if (_va == 4) {
                                    $("#J_lastimg").attr("src", $scope.imgs.hero04);
                                    $("#J_lastname").html("已选角色：测试");
                                }
                                else if (_va == 5) {
                                    $("#J_lastimg").attr("src", $scope.imgs.hero05);
                                    $("#J_lastname").html("已选角色：财务总监");
                                }
                                else if (_va == 6) {
                                    $("#J_lastimg").attr("src", $scope.imgs.hero06);
                                    $("#J_lastname").html("已选角色：视觉设计");
                                }

                            });
                            $(".j_toShare").on("click", function () {
                                $("#J_share").show()
                            });

                        }
                        else if (index === 13) {
                            var _va = $("#J_page12>a.hover>input").val();


                            if (_va == 1) {
                                $("#J_lastimg").attr("src", $scope.imgs.hero01);
                                $("#J_lastname").html("已选角色：营销策划");
                            }
                            else if (_va == 2) {
                                $("#J_lastimg").attr("src", $scope.imgs.hero02);
                                $("#J_lastname").html("已选角色：平台运营");
                            }
                            else if (_va == 3) {
                                $("#J_lastimg").attr("src", $scope.imgs.hero03);
                                $("#J_lastname").html("已选角色：技术");
                            }
                            else if (_va == 4) {
                                $("#J_lastimg").attr("src", $scope.imgs.hero04);
                                $("#J_lastname").html("已选角色：测试");
                            }
                            else if (_va == 5) {
                                $("#J_lastimg").attr("src", $scope.imgs.hero05);
                                $("#J_lastname").html("已选角色：财务总监");
                            }
                            else if (_va == 6) {
                                $("#J_lastimg").attr("src", $scope.imgs.hero06);
                                $("#J_lastname").html("已选角色：视觉设计");
                            }
                        }
                    },
                    onLeave           : function (index, direction) {
                        if (index === '1') {
                            $('.section1').find('.big').animate({
                                left: '-120%'
                            }, 500, 'easeOutExpo');
                            $('.section1').find('img.sm').animate({
                                left: '-120%'
                            }, 500, 'easeOutExpo');

                            $('.section1').find('img.h1').fadeOut();
                            $('.section1').find('img.h2').fadeOut();
                            $('.section1').find('img.h3').fadeOut();
                            $('.section1').find('img.h4').fadeOut();
                            $('.section1').find('img.h5').fadeOut();
                            $('.section1').find('img.h6').fadeOut();
                        }
                        else if (index === 5) {
                            $('.section5').find('img.top').animate({
                                'margin-left': '-55%'
                            }, 500, 'easeOutExpo');
                            $('.section5').find('img.bottom').fadeOut();
                        }
                        else if (index === 6) {
                            $('.section6').find('img.top').animate({
                                'margin-left': '-55%'
                            }, 500, 'easeOutExpo');
                            $('.section6').find('img.bottom').fadeOut();
                        }
                        else if (index === 7) {
                            $('.section7').find('img.top').animate({
                                'margin-left': '-55%'
                            }, 500, 'easeOutExpo');
                            $('.section7').find('img.top_s7').delay(80).animate({
                                'right': '-22%'
                            }, 500, 'easeOutExpo');
                            $('.section7').find('img.bottom').fadeOut();
                        }
                        else if (index === 8) {
                            $('.section8').find('img.top').animate({
                                'margin-left': '-55%'
                            }, 500, 'easeOutExpo');
                            $('.section8').find('img.bottom').fadeOut();
                        }
                        else if (index === 9) {
                            $('.section9').find('img.top').animate({
                                'margin-left': '-55%'
                            }, 500, 'easeOutExpo');
                            $('.section9').find('img.bottom').fadeOut();
                        }
                        else if (index === 10) {
                            $('.section10').find('img.top').animate({
                                'margin-left': '-55%'
                            }, 500, 'easeOutExpo');
                            $('.section10').find('img.top_s10').delay(500).animate({
                                'right': '-20%'
                            }, 500, 'easeOutExpo');
                            $('.section10').find('img.bottom').fadeOut();
                        }
                        else if (index === 11) {
                            $('.section11').find('img.top').animate({
                                'margin-left': '-55%'
                            }, 500, 'easeOutExpo');
                            $('.section11').find('img.bottom').fadeOut();
                        }
                    }
                });
                $("#J_toMail").on("click", function () {
                    window.location.href = "mailto:hr@ikaowo.com";
                    setTimeout(function(){
                        /*var a=confirm("邮件已发送？");
                         if(a==true){
                         $(".page14").show();
                         $(".page13").hide()
                         }*/
                        $(".page14").show();
                        $(".page13").hide()
                    },1000);
                });
                $(".j_toShare").on("click", function () {
                    $("#J_share").show()
                });
            });
        });
    }]);
