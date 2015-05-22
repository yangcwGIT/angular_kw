/**
 * Created by jyo on 15-3-17.
 */
angular.module('kaowoApp', ['ui.router', 'ngAnimate', 'oc.lazyLoad', 'ngResource', 'lodash', 'ngSanitize']);
angular.module('kaowoApp')
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider, $compileProvider) {
		$locationProvider.hashPrefix('');
		$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|kaowo|ftp|mailto|chrome-extension):/);
		//$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|kaowo):/);
		$stateProvider

			//广告
			.state('ad-partial', {
				url        : '/ad',
				controller : 'adCtrl',
				templateUrl: 'app/partial/ad-partial/ad-partial.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', '$rootScope', function ($ocLazyLoad, $rootScope) {
						return $ocLazyLoad.load(
							[
								'bower_components/fullpage.js/jquery.fullPage.css',
								'app/partial/ad-partial/ad-partial.css',
								'bower_components/fullpage.js/jquery.fullPage.min.js',
								'bower_components/fullpage.js/vendors/jquery.easings.min.js',
								'app/directive/imageonload.js'
							]
						).then(function () {
								$rootScope.$emit('ocLazyLoad.fileLoaded');
							})
					}],
					loadMyCtrl : ['$ocLazyLoad', '$rootScope', function ($ocLazyLoad, $rootScope) {
						return $ocLazyLoad.load(
							[
								'app/partial/ad-partial/adCtrl.js'
							]
						)
					}]
				}
				//controller:'adCtrl'
			})

			//app内嵌专家介绍页面
			.state('tumblr', {
				url        : '/tumblr?u_id&imgw&kk',
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

			//空白页面
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

			//辰沫专家页面
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

			//前进把爆款
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
			})
		;
		/* Add New States Above */
		$urlRouterProvider.otherwise('/certi');
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