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
				title        : '1元专享',
				content:'1元专享',
				url          : '/imglist/:item',
				defaultParams: {
					item: 1
				},
				controller   : 'imglistCtrl',
				templateUrl  : 'spApp/partial/imglist-partial/imglist.html',
				resolve      : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/imglist-partial/imglist.css',
								'spApp/partial/imglist-partial/imglistCtrl.js'
							]
						)
					}]
				}
			})
			//招募页面
			.state('enlist', {
				title      : '靠我-寻找民间电商高手',
				content:'寻找民间电商高手',
				url        : '/enlist',
				controller : 'enlistCtrl',
				templateUrl: 'spApp/partial/enlist-partial/enlist.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/enlist-partial/enlist.css',
								'spApp/partial/enlist-partial/enlistCtrl.js'
							]
						)
					}]
				}
			})
			.state('recruit', {
				url        : '/recruit',
				controller : 'recruitCtrl',
				title      : '立即加入,成为「靠我」专家',
				content:'立即加入,成为「靠我」专家',
				templateUrl: 'spApp/partial/recruit-partial/recruit.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/recruit-partial/recruit.css',
								'spApp/services/spService.js',
								'spApp/directive/imageonload.js',
								'spApp/partial/recruit-partial/recruitCtrl.js'
							]
						)
					}]
				}
			})
			//更多类目
			.state('linklist', {
				title      : '更多类目',
				content:'靠我更多类目',
				url        : '/linklist',
				controller : 'linklistCtrl',
				templateUrl: 'spApp/partial/linklist-partial/linklist.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/linklist-partial/linklist.css',
								'spApp/services/spService.js',
								'spApp/partial/linklist-partial/linklistCtrl.js'
							]
						)
					}]
				}
			})
			//本月大明星
			.state('monthstar', {
				title      : '本月大明星',
				content:'本月大明星',
				url        : '/monthstar',
				controller : 'monthstarCtrl',
				templateUrl: 'spApp/partial/active-partial/month-star/monthstar.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/active-partial/styles/active.css',
								'spApp/partial/active-partial/month-star/monthstarCtrl.js'
							]
						)
					}]
				}
			})
			//靠我平台介绍
			.state('kaowointro', {
				title      : '靠我平台介绍',
				content:'「靠我」电商智慧交易平台中所有上线专家，均经过透明、公开、科学的流程进行过认证，在一定程度上保证了您在应用内付费咨询的质量。如您在日常的咨询使用中，对专家的服务质量不满意时，您可以联系靠我客服人员进行协调解决。',
				url        : '/kaowointro',
				controller : 'kaowointroCtrl',
				templateUrl: 'spApp/partial/active-partial/kaowo-intro/kaowointro.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/active-partial/styles/active.css',
								'spApp/partial/active-partial/kaowo-intro/kaowointroCtrl.js'
							]
						)
					}]
				}
			})
			//hot榜
			.state('hotranking', {
				title      : 'Hot排行榜',
				content:'hot排行榜 月度热门咨询话题集合',
				url        : '/hotranking',
				controller : 'hotrankingCtrl',
				templateUrl: 'spApp/partial/active-partial/hot-ranking/hotranking.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/active-partial/styles/active.css',
								'spApp/partial/active-partial/hot-ranking/hotrankingCtrl.js'
							]
						)
					}]
				}
			})
			//专家认证中心
			.state('procerti', {
				title      : '认证中心',
				content:'专家认证中心',
				url        : '/procerti',
				controller : 'procertiCtrl',
				templateUrl: 'spApp/partial/active-partial/pro-certi/procerti.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/active-partial/pro-certi/certi.css',
								'spApp/services/spService.js',
								'spApp/partial/active-partial/pro-certi/procertiCtrl.js'
							]
						)
					}]
				}
			})

			//CEO 智囊团
			.state('ceo-factory', {
				title      : 'CEO 智囊团',
				content:'靠我 CEO 智囊团',
				url        : '/ceo-factory',
				controller : 'ceo-factoryCtrl',
				templateUrl: 'spApp/partial/active-partial/ceo-factory/ceo-factory.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/active-partial/ceo-factory/ceo-factory.css',
								'spApp/partial/active-partial/ceo-factory/ceo-factoryCtrl.js'
							]
						)
					}]
				}
			})//使用帮助-首页
			.state('help-index', {
				title      : '使用帮助',
				content    : '靠我使用帮助',
				url        : '/help-index',
				controller : 'helpContorller',
				templateUrl: 'spApp/partial/help-partial/help-index.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/help-partial/src/help.css',
								'spApp/partial/help-partial/src/helpContorller.js'
							]
						)
					}]
				}
			})
			//使用帮助-「靠我」是什么？
			.state('help/app-intro', {
				title      : '「靠我」是什么？',
				content    : '「靠我」是一个智慧交易平台，为解决商人难题而生。有困难上靠我，「靠我」希望通过智慧共享的方式，一对一直接连线权威专家，快速、精准、高效地帮求助者答疑解惑，让专家的智慧和经验发挥出更大的价值。',
				url        : '/help/app-intro',
				controller : 'helpContorller',
				templateUrl: 'spApp/partial/help-partial/app-intro.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/help-partial/src/help.css',
								'spApp/partial/help-partial/src/helpContorller.js'
							]
						)
					}]
				}
			})
			//使用帮助-提现什么时候到帐
			.state('help/account-time', {
				title      : '提现什么时候到帐？',
				content    : '专家成功解答问题，完成后48小时内可提现。',
				url        : '/help/account-time',
				controller : 'helpContorller',
				templateUrl: 'spApp/partial/help-partial/account-time.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/help-partial/src/help.css',
								'spApp/partial/help-partial/src/helpContorller.js'
							]
						)
					}]
				}
			})
			//使用帮助-如何申请成为专家
			.state('help/apply-sxpert', {
				title      : '如何申请成为专家?',
				content    : '在「靠我」注册后，点击首页下方“专长”，申请成为专家点击“立即申请”，填写“专长标签”。',
				url        : '/help/apply-sxpert',
				controller : 'helpContorller',
				templateUrl: 'spApp/partial/help-partial/apply-sxpert.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/help-partial/src/help.css',
								'spApp/partial/help-partial/src/helpContorller.js'
							]
						)
					}]
				}
			})
			//使用帮助-为何必须对专家做出评价
			.state('help/appraise-expert', {
				title      : '为何必须对专家做出评价?',
				content    : '用户的评价是咨询完成的最终标志，只有用户评价后，「靠我」才确认双方的咨询已经完成，【专家】才可以申请提现。同时，您的评价将帮助其他用户更了解专家。',
				url        : '/help/appraise-expert',
				controller : 'helpContorller',
				templateUrl: 'spApp/partial/help-partial/appraise-expert.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/help-partial/src/help.css',
								'spApp/partial/help-partial/src/helpContorller.js'
							]
						)
					}]
				}
			})
			//使用帮助-专家可以修改自己的个人主页吗
			.state('help/change-home', {
				title      : '专家可以修改自己的个人主页吗?',
				content    : '目前专家可以修改自己的主页，也可以修改自己的专长标签，如有任何需要，请告知顾问。',
				url        : '/help/change-home',
				controller : 'helpContorller',
				templateUrl: 'spApp/partial/help-partial/change-home.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/help-partial/src/help.css',
								'spApp/partial/help-partial/src/helpContorller.js'
							]
						)
					}]
				}
			})
			//使用帮助-如何联系靠我
			.state('help/contact-kaowo', {
				title      : '如何联系靠我?',
				content    : '目前专家可以修改自己的主页，也可以修改自己的专长标签，如有任何需要，请告知顾问。',
				url        : '/help/contact-kaowo',
				controller : 'helpContorller',
				templateUrl: 'spApp/partial/help-partial/contact-kaowo.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/help-partial/src/help.css',
								'spApp/partial/help-partial/src/helpContorller.js'
							]
						)
					}]
				}
			})
			//使用帮助-专家来自哪里
			.state('help/expert-place', {
				title      : '专家来自哪里',
				content    : '「靠我」的专家都是某一领域的高手，拥有多年实践经验；除此以外，他们还有分享的热情，以及良好的沟通能力。目前「靠我」的每位专家都经过顾问的审核与认证，确保身份真实。',
				url        : '/help/expert-place',
				controller : 'helpContorller',
				templateUrl: 'spApp/partial/help-partial/expert-place.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/help-partial/src/help.css',
								'spApp/partial/help-partial/src/helpContorller.js'
							]
						)
					}]
				}
			})
			//使用帮助-交易过程中收手续费吗
			.state('help/handling-charge', {
				title      : '交易过程中收手续费吗',
				content    : '交易完成后，「靠我」平台将会收取20%的手续费。',
				url        : '/help/handling-charge',
				controller : 'helpContorller',
				templateUrl: 'spApp/partial/help-partial/handling-charge.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/help-partial/src/help.css',
								'spApp/partial/help-partial/src/helpContorller.js'
							]
						)
					}]
				}
			})
			//使用帮助-专家可以为自己定价吗
			.state('help/my-pricing', {
				title      : '专家可以为自己定价吗',
				content    : '专家的咨询费用由专家自己决定。价格并不代表专家的资历深浅，而是作为一个门槛，用来分辨用户是否真心求教。此外，这也是用户对专家所付出的时间和给予的帮助表示感谢。',
				url        : '/help/my-pricing',
				controller : 'helpContorller',
				templateUrl: 'spApp/partial/help-partial/my-pricing.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/help-partial/src/help.css',
								'spApp/partial/help-partial/src/helpContorller.js'
							]
						)
					}]
				}
			})
			//使用帮助-如何选择自己的标题
			.state('help/my-title', {
				title      : '如何选择自己的标题',
				content    : '目前的咨询问题主要分为15类：淘宝，微商，京东，o2o，跨境电商，融资，法务，财务，管理，电商服务，互联网技术，亚马逊，蘑菇街，美丽说，亚马逊，唯品会。其中前五类目前是用户需求最大的领域。',
				url        : '/help/my-title',
				controller : 'helpContorller',
				templateUrl: 'spApp/partial/help-partial/my-title.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/help-partial/src/help.css',
								'spApp/partial/help-partial/src/helpContorller.js'
							]
						)
					}]
				}
			})
			//使用帮助-专家会拒绝用户的请求
			.state('help/refuse-use', {
				title      : '专家会拒绝用户的请求',
				content    : '专家可以拒绝用户的请求。专家的时间和精力有限，因此会根据用户的问题选择是否接听。请用户在发送咨询请求时，尽可能清晰、具体地描述自己的问题，这会提高接听成功的几率。',
				url        : '/help/refuse-use',
				controller : 'helpContorller',
				templateUrl: 'spApp/partial/help-partial/refuse-use.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/help-partial/src/help.css',
								'spApp/partial/help-partial/src/helpContorller.js'
							]
						)
					}]
				}
			})
			//使用帮助-「靠我」退款须知
			.state('help/refund-notice', {
				title      : '「靠我」退款须知',
				content    : '用户咨询过后，超出24小时不可申请退款。',
				url        : '/help/refund-notice',
				controller : 'helpContorller',
				templateUrl: 'spApp/partial/help-partial/refund-notice.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/help-partial/src/help.css',
								'spApp/partial/help-partial/src/helpContorller.js'
							]
						)
					}]
				}
			})
			//使用帮助-「靠我」用户须遵守条款
			.state('help/use-kaowo', {
				title      : '「靠我」用户须遵守条款',
				content    : '用户注册「靠我」若绑定号码为失效号码则产生的咨询费用不作为退款理由。',
				url        : '/help/use-kaowo',
				controller : 'helpContorller',
				templateUrl: 'spApp/partial/help-partial/use-kaowo.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/help-partial/src/help.css',
								'spApp/partial/help-partial/src/helpContorller.js'
							]
						)
					}]
				}
			})
			//使用帮助-如何使用「靠我」
			.state('help/use-claues', {
				title      : '如何使用「靠我」',
				content    : '注册：用户需绑定有效手机号码，并设置「靠我」昵称。',
				url        : '/help/use-claues',
				controller : 'helpContorller',
				templateUrl: 'spApp/partial/help-partial/use-claues.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/help-partial/src/help.css',
								'spApp/partial/help-partial/src/helpContorller.js'
							]
						)
					}]
				}
			})
			//使用帮助-为何用户必须付费
			.state('help/user-pay', {
				title      : '为何用户必须付费',
				content    : '在这里，问题的价格并不代表专家的资历深浅，也不代表这一问题的价值高低。付费也是用户对专家所付出的经验和时间表示尊重。',
				url        : '/help/user-pay',
				controller : 'helpContorller',
				templateUrl: 'spApp/partial/help-partial/user-pay.html',
				resolve    : {
					loadOcModal: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							[
								'spApp/partial/help-partial/src/help.css',
								'spApp/partial/help-partial/src/helpContorller.js'
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
				$rootScope.content = toState.content;
			})
	}]);
