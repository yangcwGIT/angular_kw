/**
 * Created by Han on 15-6-17.
 */
angular.module('kaowoApp', ['ui.router', 'ngAnimate', 'oc.lazyLoad', 'ngResource', 'lodash', 'ngSanitize']);
angular.module('kaowoApp')
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider, $compileProvider) {
        $locationProvider.hashPrefix('');
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|kaowo|ftp|mailto|chrome-extension):/);
        $stateProvider
            //404
            .state('404', {
                title        : '404',
                url          : '/404',
                defaultParams: {
                    item: 1
                },
                templateUrl  : '404.html'
            })
            //一元专享
            .state('one-yuan', {
                url        : '/one-yuan',
                controller : 'oneyuanCtrl',
                title      : '一元专享',
                content    : '一元是一种态度，是一种情怀！',
                templateUrl: 'app/partial/one-yuan/one-yuan.html',
                resolve    : {
                    loadOcModal: ['$ocLazyLoad', '$rootScope', function ($ocLazyLoad, $rootScope) {
                        return $ocLazyLoad.load(
                            [
                                'app/partial/one-yuan/one-yuan.css',
                                'bower_components/fullpage.js/jquery.fullPage.css',
                                'bower_components/jquery-ui/ui/minified/jquery-ui.min.js',
                                'bower_components/fullpage.js/jquery.fullPage.min.js',
                                'app/partial/one-yuan/oneyuanCtrl.js'
                            ]
                        ).then(function () {
                                $rootScope.$emit('ocLazyLoad.fileLoaded');
                            })
                    }]
                }
            })
            //约-春哥
            .state('yue-chun', {
                url        : '/yue-chun',
                controller : 'chunindexCtrl',
                title      : '我真的是春哥，约吗？',
                content    : '「靠我」约-春哥',
                templateUrl: 'app/partial/agreement-parges/chun/index.html',
                resolve    : {
                    loadOcModal: ['$ocLazyLoad', '$rootScope', function ($ocLazyLoad, $rootScope) {
                        return $ocLazyLoad.load(
                            [
                                'app/partial/agreement-parges/argument.css',
                                'bower_components/fullpage.js/jquery.fullPage.css',
                                'app/partial/agreement-parges/idangerous.swiper.min.js',
                                'bower_components/jquery-ui/ui/minified/jquery-ui.min.js',
                                'bower_components/fullpage.js/jquery.fullPage.min.js',
                                'app/partial/agreement-parges/chun/indexCtrl.js'
                            ]
                        ).then(function () {
                                $rootScope.$emit('ocLazyLoad.fileLoaded');
                            })
                    }]
                }
            })
            //跳转页面
            .state('go-download', {
                url        : '/go-download',
                controller : 'downloadCtrl',
                title      : '正在跳转……',
                //content    : '「靠我」春哥简介',
                templateUrl: 'app/partial/agreement-parges/download.html',
                resolve    : {
                    loadOcModal: ['$ocLazyLoad', '$rootScope', function ($ocLazyLoad, $rootScope) {
                        return $ocLazyLoad.load(
                            [
                                'app/partial/agreement-parges/downloadCtrl.js'
                            ]
                        ).then(function () {
                                $rootScope.$emit('ocLazyLoad.fileLoaded');
                            })
                    }]
                }
            })
            //广告
            .state('ad-partial', {
                url        : '/ad',
                controller : 'adCtrl',
                templateUrl: 'app/partial/ad-partial/ad-partial.html',
                resolve    : {

                    loadMyCtrl: ['$ocLazyLoad', '$rootScope', function ($ocLazyLoad, $rootScope) {
                        return $ocLazyLoad.load(
                            [
                                'app/partial/ad-partial/adCtrl.js'
                            ]
                        )
                    }]
                }
                //controller:'adCtrl'
            })
            //祈祷
            .state('pray-partial', {
                url        : '/pray',
                controller : 'prayCtrl',
                templateUrl: 'app/partial/pray-partial/pray-partial.html',
                resolve    : {
                    loadOcModal: ['$ocLazyLoad', '$rootScope', function ($ocLazyLoad, $rootScope) {
                        return $ocLazyLoad.load(
                            [
                                'app/partial/pray-partial/pray-partial.css',
                                'bower_components/fullpage.js/jquery.fullPage.css',
                                'app/services/domains.js',
                                'app/services/kaowoServices.js',
                                'bower_components/fullpage.js/jquery.fullPage.min.js',
                                'bower_components/fullpage.js/vendors/jquery.easings.min.js',
                                'app/partial/pray-partial/jquery.rollGallery_yeso.js',
                                'app/partial/pray-partial/prayCtrl.js'
                            ]
                        ).then(function () {
                                $rootScope.$emit('ocLazyLoad.fileLoaded');
                            })
                    }]
                }
                //controller:'prayCtrl'
            })
            //招聘
            .state('into-job', {
                url        : '/into-job',
                controller : 'jobCtrl',
                title      : '加入「靠我」，和超级战队一起拯救世界',
                content    : '超级战队，就差你了',
                templateUrl: 'app/partial/into-job/into-job.html',
                resolve    : {
                    loadOcModal: ['$ocLazyLoad', '$rootScope', function ($ocLazyLoad, $rootScope) {
                        return $ocLazyLoad.load(
                            [
                                'app/partial/into-job/into-job.css',
                                'bower_components/fullpage.js/jquery.fullPage.css',
                                //'app/services/domains.js',
                                //'app/services/kaowoServices.js',
                                'bower_components/jquery-ui/ui/minified/jquery-ui.min.js',
                                'bower_components/fullpage.js/jquery.fullPage.min.js',
                                'app/partial/into-job/jobCtrl.js'
                            ]
                        ).then(function () {
                                $rootScope.$emit('ocLazyLoad.fileLoaded');
                            })
                    }]
                }
                //controller:'prayCtrl'
            })


            //app内置介绍
            .state('tumblr', {
                url        : '/tumblr?u_id&imgw&kk&cuid&version',
                templateUrl: 'app/partial/tumblr-partial/tumblr-partial.html',
                controller : 'tumblrCtrl',
                resolve    : {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            [
                                'app/partial/tumblr-partial/tumblr-partial.css',
                                'app/services/domains.js',
                                'app/services/kaowoServices.js',
                                'app/partial/tumblr-partial/tumblrCtrl.js'
                            ]
                        );
                    }]
                }
            })

            //
            .state('certi', {
                url        : '/certi',
                templateUrl: 'app/partial/certi-partial/certi-partial.html',
                controller : 'certiCtrl',
                resolve    : {
                    loadFiles: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([

                            'app/partial/certi-partial/certi-partial.css',
                            'app/partial/certi-partial/certiCtrl.js'
                        ])
                    }]
                }
            })

            //老顽童
            .state('lwt', {
                url        : '/lwt',
                templateUrl: 'app/partial/lwt-partial/lwt-partial.html',
                controller : 'lwtCtrl',
                resolve    : {
                    loadFiles: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'app/partial/lwt-partial/lwt-partial.css',
                            'app/partial/lwt-partial/lwtCtrl.js'
                        ])
                    }]
                }
            })

            //Ç°½ø°Ñ±¬¿î
            .state('hotsell', {
                url        : '/hotsell',
                templateUrl: 'app/partial/hotsell-partial/hotsell-partial.html',
                controller : 'hotsellCtrl',
                resolve    : {
                    loadFiles: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'app/partial/hotsell-partial/hotsell-partial.css',
                            'app/services/domains.js',
                            'app/services/kaowoServices.js',
                            'app/partial/hotsell-partial/hotsellCtrl.js'
                        ])
                    }]
                }
            })

            //奔跑吧专家
            .state('running', {
                url        : '/running',
                templateUrl: 'app/partial/running-partial/running-partial.html',
                controller : 'runningCtrl',
                resolve    : {
                    loadFiles: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'app/partial/running-partial/running-partial.css',
                            'app/services/domains.js',
                            'app/services/kaowoServices.js',
                            'app/partial/running-partial/runningCtrl.js'
                        ])
                    }]
                }
            });
        /* Add New States Above */
        $urlRouterProvider.otherwise('/404');

        //$locationProvider.html5Mode(false);
        $ocLazyLoadProvider.config({
            debug : true,
            events: true
        });
    })
    .directive('slideable', function () {
        return {
            restrict: 'C',
            compile : function (element, attr) {
                // wrap tag
                var contents = element.html();
                element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');
                return function postLink(scope, element, attrs) {
                    // default properties
                    attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
                    attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                    element.css({
                        'overflow'                : 'hidden',
                        'height'                  : '0px',
                        'transitionProperty'      : 'height',
                        'transitionDuration'      : attrs.duration,
                        'transitionTimingFunction': attrs.easing
                    });
                };
            }
        };
    })
    .run(['$location', '$rootScope', function ($location, $rootScope) {
        $rootScope.$on('$stateChangeStart', function (event, toState) {
            $rootScope.title = toState.title;
            $rootScope.content = toState.content
        })
    }])
    .directive('slideToggle', function () {
        return {
            restrict: 'A',
            link    : function (scope, element, attrs) {
                var target, content;
                attrs.expanded = false;
                element.bind('click', function () {
                    if (!target) target = document.querySelector(attrs.slideToggle);
                    if (!content) content = target.querySelector('.slideable_content');
                    if (!attrs.expanded) {
                        content.style.border = '1px solid rgba(0,0,0,0)';
                        var y = content.clientHeight;
                        content.style.border = 0;
                        target.style.height = y + 'px';
                    } else {
                        target.style.height = '0px';
                    }
                    attrs.expanded = !attrs.expanded;
                });
            }
        }
    });
function removejscssfile(filename, filetype) {
    var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none"; //determine element type to create nodelist from
    var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none"; //determine corresponding attribute to test for
    var allsuspects = document.getElementsByTagName(targetelement);
    for (var i = allsuspects.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
            allsuspects[i].parentNode.removeChild(allsuspects[i]); //remove element by calling parentNode.removeChild()
    }
}
