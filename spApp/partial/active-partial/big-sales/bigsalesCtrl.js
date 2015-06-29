/**
 * Created by han on 15-5-8.
 */
angular.module('spApp')
	.controller('monthstarCtrl', ['$scope', '$rootScope', 'userAgent', function ($scope, $rootScope, userAgent) {
		var lwtDiv = document.getElementById("actPages"),
			width = lwtDiv.offsetWidth * 2;
		if (lwtDiv.offsetWidth = 414) {
			width = lwtDiv.offsetWidth * 3
		}
		$scope.Datas = {
			images: {
				imgs_1 : ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_01.png' + '?imageView2/2/w/' + width],
				imgs_2 : ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_02.png' + '?imageView2/2/w/' + width],
				imgs_3 : ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_03.png' + '?imageView2/2/w/' + width],
				imgs_4 : ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_04.png' + '?imageView2/2/w/' + width],
				imgs_5 : ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_05.png' + '?imageView2/2/w/' + width],
				imgs_6 : ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_06.png' + '?imageView2/2/w/' + width],
				imgs_7 : ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_07.png' + '?imageView2/2/w/' + width],
				imgs_8 : ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_08.png' + '?imageView2/2/w/' + width],
				imgs_9 : ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_09.png' + '?imageView2/2/w/' + width],
				imgs_10: ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_10.png' + '?imageView2/2/w/' + width],
				imgs_11: ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_11.png' + '?imageView2/2/w/' + width],
				imgs_12: ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_12.png' + '?imageView2/2/w/' + width],
				imgs_13: ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_13.png' + '?imageView2/2/w/' + width],
				imgs_14: ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_14.png' + '?imageView2/2/w/' + width],
				imgs_15: ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_15.png' + '?imageView2/2/w/' + width],
				imgs_16: ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_16.png' + '?imageView2/2/w/' + width],
				imgs_17: ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_17.png' + '?imageView2/2/w/' + width],
				imgs_18: ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_18.png' + '?imageView2/2/w/' + width],
				imgs_19: ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_19.png' + '?imageView2/2/w/' + width],
				imgs_20: ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_20.png' + '?imageView2/2/w/' + width],
				imgs_21: ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_21.png' + '?imageView2/2/w/' + width],
				imgs_22: ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_22.png' + '?imageView2/2/w/' + width],
				imgs_23: ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_23.png' + '?imageView2/2/w/' + width],
				imgs_24: ['http://7xaw9f.com2.z0.glb.qiniucdn.com/year_midd_24.png' + '?imageView2/2/w/' + width]
			},
			userId: {
				user_4: ['412'],
				user_5: ['407'],
				user_6: ['980'],
				user_7: ['435'],

				user_9 : ['409'],
				user_10: ['1315'],
				user_11: ['825'],
				user_12: ['694'],

				user_15: ['3207'],
				user_16: ['402'],
				user_17: ['411'],
				user_18: ['422'],

				user_20: ['373'],
				user_21: ['462'],
				user_22: ['446'],
				user_23: ['440']
			}
		};
		$scope.Datas.isWiexin = false;
		var ua = navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == "micromessenger") {
			$scope.Datas.isWiexin = true;
		}
		$scope.$on('$viewContentLoaded', function () {
			userAgent = new userAgent();
		});
	}]);