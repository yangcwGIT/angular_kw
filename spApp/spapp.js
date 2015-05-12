/**
 * Created by jyo on 15-3-26.
 */
angular.module('spApp', ['ui.router', 'oc.lazyLoad', 'ngResource', 'lodash']);

angular
    .module('spApp')
    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    })
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider, $compileProvider) {
        $locationProvider.hashPrefix('');
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|kaowo|ftp|mailto|chrome-extension):/);

        $urlRouterProvider.otherwise('/enlist');

        $stateProvider
            //oneYuanJoin
            .state('imglist', {
                title: '1元专享',
                url  : '/imglist/:item',

                defaultParams: {
                    item: 1
                },
                controller   : 'imglistCtrl',
                templateUrl  : 'spApp/partial/imglist-partial/imglist.html',
                resolve      : {
                    loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            [
                                'spApp/partial/imglist-partial/imglistCtrl.js',
                                'spApp/partial/imglist-partial/imglist.css'
                            ]
                        )
                    }]
                }
            })
            //招募页面
            .state('enlist', {
                title      : '靠我-寻找民间电商高手',
                url        : '/enlist',
                controller : 'enlistCtrl',
                templateUrl: 'spApp/partial/enlist-partial/enlist.html',
                resolve    : {
                    loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            [
                                'spApp/partial/enlist-partial/enlistCtrl.js',
                                'spApp/partial/enlist-partial/enlist.css'
                            ]
                        )
                    }]
                }
            })
            .state('recruit', {
                url        : '/recruit',
                controller : 'recruitCtrl',
                title      : '立即加入,成为「靠我」专家',
                templateUrl: 'spApp/partial/recruit-partial/recruit.html',
                resolve    : {
                    loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            [
                                'spApp/services/spService.js',
                                'spApp/directive/imageonload.js',
                                'spApp/partial/recruit-partial/recruitCtrl.js',
                                'spApp/partial/recruit-partial/recruit.css'
                            ]
                        )
                    }]
                }
            })
            //更多类目
            .state('linklist', {
                title      : '更多类目',
                url        : '/linklist',
                controller : 'linklistCtrl',
                templateUrl: 'spApp/partial/linklist-partial/linklist.html',
                resolve    : {
                    loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            [
                                'spApp/services/spService.js',
                                'spApp/partial/linklist-partial/linklistCtrl.js',
                                'spApp/partial/linklist-partial/linklist.css'
                            ]
                        )
                    }]
                }
            })
            //本月大明星
            .state('monthstar', {
                title      : '本月大明星',
                url        : '/monthstar',
                controller : 'monthstarCtrl',
                templateUrl: 'spApp/partial/active-partial/month-star/monthstar.html',
                resolve    : {
                    loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            [
                                'spApp/partial/active-partial/month-star/monthstarCtrl.js',
                                'spApp/partial/active-partial/styles/reset.css',
                                'spApp/partial/active-partial/styles/active.css'
                            ]
                        )
                    }]
                }
            })
            //靠我平台介绍
            .state('kaowointro', {
                title      : '靠我平台介绍',
                url        : '/kaowointro',
                controller : 'kaowointroCtrl',
                templateUrl: 'spApp/partial/active-partial/kaowo-intro/kaowointro.html',
                resolve    : {
                    loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            [
                                'spApp/partial/active-partial/kaowo-intro/kaowointroCtrl.js',
                                'spApp/partial/active-partial/styles/reset.css',
                                'spApp/partial/active-partial/styles/active.css'
                            ]
                        )
                    }]
                }
            })
            //hot榜
            .state('hotranking', {
                title      : 'hot排行榜',
                url        : '/hotranking',
                controller : 'hotrankingCtrl',
                templateUrl: 'spApp/partial/active-partial/hot-ranking/hotranking.html',
                resolve    : {
                    loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            [
                                'spApp/partial/active-partial/hot-ranking/hotrankingCtrl.js',
                                'spApp/partial/active-partial/styles/reset.css',
                                'spApp/partial/active-partial/styles/active.css'
                            ]
                        )
                    }]
                }
            })
            //专家认证中心
            .state('procerti', {
                title      : '认证中心',
                url        : '/procerti',
                controller : 'procertiCtrl',
                templateUrl: 'spApp/partial/active-partial/pro-certi/procerti.html',
                resolve    : {
                    loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            [
                                'spApp/services/spService.js',
                                'spApp/partial/active-partial/pro-certi/procertiCtrl.js',
                                'spApp/partial/active-partial/styles/reset.css',
                                'spApp/partial/active-partial/styles/certi.css'
                            ]
                        )
                    }]
                }
            })
    })
    .run(['$location', '$rootScope', function ($location, $rootScope) {

        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                //console.log('toState:',toState);
                //console.log('toParams:',toParams);
                $rootScope.title = toState.title;
            })
    }]);
