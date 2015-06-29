(function() {
  angular.module('share', ['ui.router', 'oc.lazyLoad', 'ngResource', 'lodash', 'ngSanitize']);

  angular.module('share').config([
    '$stateProvider', '$urlRouterProvider', '$locationProvider', '$ocLazyLoadProvider', '$compileProvider', function(stateP, urlRP, localP, ocLazyP, compP) {
      localP.hashPrefix('');
      compP.aHrefSanitizationWhitelist(/^\s*(https?|kaowo|ftp|mailto|chrome-extension):/);
      urlRP.otherwise('404');
      return stateP.state('mine', {
        title: '',
        url: '/mine/:u_id?isApp',
        controller: 'mineCtrl',
        templateUrl: 'share/partial/mine-partial/mine.html',
        resolve: {
          loadOcModal: [
            '$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load(['share/partial/mine-partial/mine.css', 'share/services/mineTab.js', 'share/partial/mine-partial/jqMineTab.js', 'share/partial/mine-partial/mineCtrl.js', 'src/scripts/statistics.js']);
            }
          ]
        }
      }).state('reward-list', {
        title: '',
        url: '/reward-list/:pro_u_id?isApp',
        controller: 'rewardlistCtrl',
        templateUrl: 'share/partial/reward-list/reward-list.html',
        resolve: {
          loadOcModal: [
            '$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load(['share/partial/reward-list/reward.css?v=a', 'share/services/reward-list.js', 'share/partial/reward-list/rewardlistCtrl.js']);
            }
          ]
        }
      }).state('reward-null', {
        title: '',
        url: '/reward-null',
        controller: 'rewardnullCtrl',
        templateUrl: 'share/partial/reward-null/reward-null.html',
        resolve: {
          loadOcModal: [
            '$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load(['share/partial/reward-list/reward.css', 'share/partial/reward-null/rewardnullCtrl.js']);
            }
          ]
        }
      }).state('reward-send', {
        title: '',
        url: '/reward-send/:tip_type/:tip_id?isApp',
        controller: 'rewardsendCtrl',
        templateUrl: 'share/partial/reward-send/reward-send.html',
        resolve: {
          loadOcModal: [
            '$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load(['share/partial/reward-list/reward.css', 'share/services/reward-send.js', 'share/partial/reward-send/rewardsendCtrl.js']);
            }
          ]
        }
      }).state('reward-money', {
        title: '',
        url: '/reward-money/:client_u_id/:pro_u_id/:tip_nx_type/:tip_nx_id?isApp',
        controller: 'rewardmoneyCtrl',
        templateUrl: 'share/partial/reward-money/reward-money.html',
        resolve: {
          loadOcModal: [
            '$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load(['share/partial/reward-list/reward.css', 'share/services/reward.js', 'share/partial/reward-money/rewardmoneyCtrl.js']);
            }
          ]
        }
      }).state('404', {
        title: '404',
        url: '/404',
        templateUrl: '404.html'
      });
    }
  ]);

  angular.module('share').run([
    '$location', '$rootScope', function($location, $rootScope) {
      return $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        return $rootScope.title = toState.title;
      });
    }
  ]);

  angular.module('share').directive("scroll", function($window) {
    return function(scope, element, attrs) {
      scope.maginTopHeight = -200.;
      scope.hheight = element.prop('offsetTop');
      return angular.element($window).bind("scroll", function(e) {
        if (this.pageYOffset < 0) {
          this.pageYOffset = 0;
          return scope.$apply();
        }
      });
    };
  });

}).call(this);

//# sourceMappingURL=app.js.map
