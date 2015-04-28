/**
 * Created by jyo on 15-3-26.
 */
angular.module('spApp', ['ui.router','oc.lazyLoad','ngResource','lodash']);

angular
    .module('spApp')
    .config(function ($stateProvider, $urlRouterProvider,$locationProvider,$ocLazyLoadProvider,$compileProvider) {
        $locationProvider.hashPrefix('');
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|kaowo|ftp|mailto|chrome-extension):/);

        $urlRouterProvider.otherwise('/enlist');

        $stateProvider
//oneYuanJoin
            .state('imglist',{
                title:'',
                url:'/imglist/:item',

                defaultParams: {item: 1},
                controller:'imglistCtrl',
                templateUrl: 'spApp/partial/imglist-partial/imglist.html',
                resolve:{
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
            .state('enlist',{
                title: '靠我-寻找民间电商高手',
                url:'/enlist',
                controller:'enlistCtrl',
                templateUrl: 'spApp/partial/enlist-partial/enlist.html',
                resolve:{
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
            .state('recruit',{
                url:'/recruit',
                controller:'recruitCtrl',
                title: '立即加入,成为「靠我」专家',
                templateUrl: 'spApp/partial/recruit-partial/recruit.html',
                resolve:{
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
    })
    .run(['$location', '$rootScope', function($location, $rootScope) {

        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams){
                console.log('toState:',toState);
                console.log('toParams:',toParams);
                $rootScope.title=toState.title;
             })
    }])
;