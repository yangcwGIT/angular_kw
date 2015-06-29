/**
 * Created by Guoxing.han on 2015/6/17 0017.
 */
angular.module('kaowoApp')
    .controller('chunindexCtrl', ['$scope', function ($scope) {

        var height = (window.innerHeight), width = (window.innerWidth) * 2;


        $scope.imgs = {
            'more': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/job-h-more.png',

            'bg1'     : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/argument-chun-bg.png?imageMogr2/thumbnail/' + width,
            //'bg1_1'   : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/argument-chun-bg1.png?imageMogr2/thumbnail/' + width,
            'bg1_text': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/argument-chun-text.png?imageMogr2/thumbnail/' + width,

            'p2_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/argument-chun-p2_1.png?imageMogr2/thumbnail/' + (width - 250),
            'p2_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/argument-chun-p2_2.png?imageMogr2/thumbnail/' + width,

            //'p3_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/argument-p3-1.png?imageMogr2/thumbnail/' + (width - 250),
            'p3_1_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/argument-p3-1-1.png?imageMogr2/thumbnail/' + (width - 250),

            'p3_2_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/argument-p3-image01.jpg?imageMogr2/thumbnail/' + width,
            'p3_2_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/argument-p3-image02.jpg?imageMogr2/thumbnail/' + width,
            'p3_2_3': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/argument-p3-image03.jpg?imageMogr2/thumbnail/' + width,
            'p3_2_4': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/argument-p3-image04.jpg?imageMogr2/thumbnail/' + width,
            'p3_2_5': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/argument-p3-image05.png?imageMogr2/thumbnail/' + width,
            'p3_3'  : 'http://7xaw9f.com2.z0.glb.qiniucdn.com/argument-text02.png?imageMogr2/thumbnail/' + width,

            'p4_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/argument-p4-1.png?imageMogr2/thumbnail/' + width,

            'p5_1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/argument-p5-1.png?imageMogr2/thumbnail/' + width,
            'p5_2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/argument-p5-2-1.png?imageMogr2/thumbnail/' + (width - 100)

        }
        $scope.Static = {
            userId: '410'

        }

        $scope.$on('$viewContentLoaded', function () {
            //$scope.showFiex = false;
            $scope.Btns = {
                //'hideFiex': function () {
                //    $scope.showFiex = true;
                //},
                'schema'  : function () {
                    window.location.href = ('kaowo://main');
                    $timeout(function () {
                        window.location.href = ('http://fir.im/kaowo')
                    }, 100);
                }
            }

            $(function () {

                // 根据手机屏幕，缩放container
                var $win = $(window),
                    $container = $("#container");
                var fp, mySwiper, _imgW, _p1H, audio;
                audio = $("#music");
                function scaleContainer() {
                    var nWinW = $win.width(),
                        nWinH = $win.height(),
                        nScaleW,
                        nScaleH;

                    if (nWinH <= 480) {
                        if (nWinW > 640) {
                            nWinW = 640;
                        }
                        if (nWinH > 1136) {
                            nWinH = 1056;
                        }

                        nScaleW = nWinW / 640;
                        nScaleH = nWinH / 1056;

                        $container.css({
                            '-webkit-transform': 'scale(' + nScaleW + ',' + nScaleH + ')',
                            'transform'        : 'scale(' + nScaleW + ',' + nScaleH + ')'
                        });
                    }

                }

                //scaleContainer();

                //$win.resize(scaleContainer);

                var _cirW = $(".touxiang_circle").width();
                $(".touxiang_circle").height(_cirW);


                var _jieBtnW = $(".jieting_btn").width();
                $(".jieting_btn").height(_jieBtnW);
                $(".btn_inner").css("margin-top", _jieBtnW / 2 - 4);


                var k_audio = document.getElementById("k_audio"),
                    k_ring = document.getElementById("k_ring"),
                    k_msg = document.getElementById("k_msg"),
                    k_msg2 = document.getElementById("k_msg2"),
                    k_msg3 = document.getElementById("k_msg3");

                k_ring.play();
                // 挂断之后直接跳转到宣传页面
                $(document).on("touchstart", ".hungUp_btn", function () {

                    k_audio.pause();
                    var audio = document.getElementById('music');
                    audio.play();
                    $("#J_page1").hide();
                    $("#J_page2").show();


                    mySwiper = new Swiper('.swiper-container', {
                        pagination         : '.pagination',
                        loop               : true,
                        grabCursor         : true,
                        paginationClickable: true,
                        autoplay           : 2500,
                        watchActiveIndex   : true
                    });
                    $(".swiper-container img").css("width", "90%");
                    _imgW = $(".swiper-container img").width();
                    _imgW = (_imgW * 766) / 1146;
                    $(".swiper-container, .swiper-wrapper, .swiper-slide, .swiper-container img").height(_imgW);



                });

                $(document).on("touchstart", function (e) {
                    e.preventDefault();
                });

                var $jieting = $(".jieting"),
                    $jietingBtn = $(".jieting_btn"),
                    $tonghua = $(".tonghua"),
                    oLeft = $jietingBtn.position().left,  // 初始值
                    nLeft,
                    nFix;   // 修正值

                $jietingBtn.on("touchstart", function (e) {
                    e.preventDefault();

                    if (e.originalEvent) {
                        e = e.originalEvent;
                    }
                    var $this = $(this),
                        touch = e.touches[0],
                        nStartLeft = touch.pageX;

                    nLeft = $this.position().left;
                    nFix = nStartLeft - nLeft;

                    $this.addClass("jieting_down");

                    $(document).on("touchmove", function (e) {

                        if (e.originalEvent) {
                            e = e.originalEvent;
                        }

                        var touch = e.touches[0];

                        nLeft = touch.pageX - nFix;

                        if (nLeft <= -40) {
                            nLeft = -40;
                        }
                        if (nLeft >= 350) {
                            nLeft = 350;
                        }
                        $jietingBtn.css({'left': nLeft});

                    }).on("touchend", function (e) {

                        $jietingBtn.removeClass("jieting_down");

                        if (nLeft <= 15 || nLeft >= 240) {
                            if (nLeft <= 15) {    // 挂断电话，跳转到信息页面
                                $(".top").hide();
                                $(".jieting").hide();
                                $(".message").addClass("message_on");

                                setTimeout(function () {
                                    k_msg.play();
                                    $(".msg_01").fadeIn(200);
                                }, 600);
                                setTimeout(function () {
                                    k_msg2.play();
                                    $(".msg_02").fadeIn(200);
                                }, 2000);
                                setTimeout(function () {
                                    k_msg3.play();
                                    $(".msg_03").fadeIn(200);
                                }, 3400);
                                setTimeout(function () {
                                    //window.location.href = "/retina.html#/home-chun?power=1";
                                    var audio = document.getElementById('music');
                                    if (audio.paused) {
                                        audio.play();
                                        $("#J_music").removeClass("music-btn2").addClass("music-btn");
                                    }
                                    //audio.play();
                                    $("#J_page1").hide();
                                    $("#J_page2").show();

                                    mySwiper = new Swiper('.swiper-container', {
                                        pagination         : '.pagination',
                                        loop               : true,
                                        grabCursor         : true,
                                        paginationClickable: true,
                                        autoplay           : 2500,
                                        watchActiveIndex   : true
                                    });
                                    $(".swiper-container img").css("width", "90%");
                                    _imgW = $(".swiper-container img").width();
                                    _imgW = (_imgW * 766) / 1146;
                                    $(".swiper-container, .swiper-wrapper, .swiper-slide, .swiper-container img").height(_imgW);


                                }, 5500);
                            }
                            if (nLeft >= 240) {    // 接听电话，播放录音

                                setTimeout(function () {
                                    k_audio.play();
                                }, 800);


                                $(".tonghua_dumiao").show();
                                $(".touxiang_circle").hide();

                                // 通话读秒圆弧背景
                                var canvas_1 = document.getElementById("canvas_1"),
                                    ctx_1 = canvas_1.getContext('2d');

                                var _cirW = $(".touxiang_circle").width() + 3;

                                $("#canvas_1").attr("width", _cirW);
                                $("#canvas_1").attr("height", _cirW);
                                $("#canvas_2").attr("width", _cirW);
                                $("#canvas_2").attr("height", _cirW);

                                ctx_1.strokeStyle = "#fff";
                                ctx_1.lineWidth = 2;
                                ctx_1.beginPath();
                                //ctx_1.arc(130, 130, 124, -0.4 * Math.PI, Math.PI * 1.4);
                                ctx_1.arc(_cirW / 2, _cirW / 2, _cirW / 2 - 4, -0.4 * Math.PI, Math.PI * 1.4);
                                ctx_1.stroke();
                                ctx_1.closePath();

                                // 实时更新的圆弧
                                var canvas_2 = document.getElementById("canvas_2"),
                                    ctx_2 = canvas_2.getContext('2d');

                                ctx_2.strokeStyle = "#fff";
                                ctx_2.lineWidth = 2;

                                var arc = -0.4,
                                    n = 1.8 / 400;

                                var arcTimer = setInterval(function () {
                                    if (arc < 1.4) {
                                        arc += n;
                                        ctx_2.beginPath();
                                        //ctx_2.arc(130, 130, 124, -0.4 * Math.PI, Math.PI * arc);
                                        ctx_2.arc(_cirW / 2, _cirW / 2, _cirW / 2 - 4, -0.4 * Math.PI, Math.PI * arc);
                                        ctx_2.stroke();
                                        ctx_2.closePath();
                                    } else {
                                        clearInterval(arcTimer);
                                    }
                                }, 50);

                                // 通话读秒
                                var $second = $(".second"),
                                    secNum = 0;
                                var secTimer = setInterval(function () {
                                    if (secNum < 20) {
                                        secNum++;
                                        var text = secNum < 10 ? "0" + secNum : secNum;
                                        $second.text("00:" + text);
                                    } else {

                                        clearInterval(secTimer);

                                        // 读秒（10）之后直接跳转到宣传页面
                                        var audio = document.getElementById('music');

                                        audio.play();
                                        $("#J_page1").hide();
                                        $("#J_page2").show();


                                        mySwiper = new Swiper('.swiper-container', {
                                            pagination         : '.pagination',
                                            loop               : true,
                                            grabCursor         : true,
                                            paginationClickable: true,
                                            autoplay           : 2500,
                                            watchActiveIndex   : true
                                        });
                                        $(".swiper-container img").css("width", "90%");
                                        _imgW = $(".swiper-container img").width();
                                        _imgW = (_imgW * 766) / 1146;
                                        $(".swiper-container, .swiper-wrapper, .swiper-slide, .swiper-container img").height(_imgW);
                                        $("#J_music").click(function () {

                                            if (audio !== null) {
                                                if (audio.paused) {
                                                    audio.play();
                                                    $("#J_music").removeClass("music-btn2").addClass("music-btn");
                                                } else {
                                                    audio.pause();
                                                    $("#J_music").removeClass("music-btn").addClass("music-btn2");
                                                }
                                            }
                                        })

                                    }
                                }, 1000);

                                setTimeout(function () {    // 延迟出现键盘
                                    $(".keybord").addClass("keybordUp");
                                    $tonghua.addClass("tonghua_show");
                                }, 200);
                            }

                            $jieting.fadeOut(200);
                            k_ring.pause();

                        } else {
                            $this.css({"left": oLeft});
                        }
                        // 取消document上的touchmove事件
                        $(document).off("touchmove").off("touchend");
                        //隐藏下载
                        $(document).on("touchstart", "#J_closeFixed", function () {
                            $("#J_kw_fixed").hide()
                        })
                        //音乐
                        $(document).on("touchstart", "#J_music", function () {
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
                        })
                        //连接
                        $(document).on("touchstart", "#J_go_download", function () {
                            var _toURL=$(this).attr("href");
                            console.log(_toURL);
                            window.location.href = _toURL;
                        })

                    });

                });
                fp = $('#dowebok').fullpage({
                    continuousVertical: false,
                    afterLoad         : function (anchorLink, index) {

                        //console.log(index);

                        if (index == 1) {
                            //document.getElementById('dowebok').style.background="#eee";
                            _p1H = $(".section").height();
                            $(".p1-bg").height(_p1H);
                            $('.section1').find('img.j_text').delay(200).animate({
                                bottom: '1%', opacity: 1
                            }, 2000, 'easeOutExpo');
                        }
                        else if (index == 3) {
                            $('.section3').find('img.p3_3').delay(200).animate({
                                'margin-top': '5%', opacity: 1
                            }, 2000, 'easeOutExpo');

                        }
                    },
                    onLeave           : function (index, direction) {
                        if (index == 1) {
                            $('.section1').find('img.j_text').delay(10).animate({
                                bottom: '-2%', opacity: 0
                            }, 10);
                        }
                        else if (index == 3) {
                            $('.section1').find('img.p3_3').delay(10).animate({
                                'margin-top': '10%', opacity: 0
                            }, 10);
                        }
                    }
                });
            });

        });

    }])

