/**
 * Created by han on 15-5-15.
 */
angular.module('spApp')
	.controller('ceo-factoryCtrl', ['$scope', '$rootScope', 'userAgent', function ($scope, $rootScope, userAgent) {
		var lwtDiv = document.getElementById("ceo-factory");
		width = lwtDiv.offsetWidth * 2;
		//$rootScope.title = 'ceo星工场';
		$scope.Datas = {
			images: {
				images_header: [
					'http://ad-ikaowo.qiniudn.com/ceo_01.png' + '?imageView2/2/w/' + width,
					'http://ad-ikaowo.qiniudn.com/ceo_02.png' + '?imageView2/2/w/' + width
				],
				imgs_1       : ['http://ad-ikaowo.qiniudn.com/ceo_04.png' + '?imageView2/2/w/' + width],
				imgs_2       : ['http://ad-ikaowo.qiniudn.com/ceo_05.png' + '?imageView2/2/w/' + width],
				imgs_3       : ['http://ad-ikaowo.qiniudn.com/ceo_06.png' + '?imageView2/2/w/' + width],
				imgs_4       : ['http://ad-ikaowo.qiniudn.com/ceo_07.png' + '?imageView2/2/w/' + width],
				imgs_5       : ['http://ad-ikaowo.qiniudn.com/ceo_08.png' + '?imageView2/2/w/' + width],
				imgs_6       : ['http://ad-ikaowo.qiniudn.com/ceo_09.png' + '?imageView2/2/w/' + width],
				imgs_7       : ['http://ad-ikaowo.qiniudn.com/ceo_10.png' + '?imageView2/2/w/' + width],
				imgs_8       : ['http://ad-ikaowo.qiniudn.com/ceo_11.png' + '?imageView2/2/w/' + width],
				imgs_9       : ['http://ad-ikaowo.qiniudn.com/ceo_12.png' + '?imageView2/2/w/' + width],
				imgs_10      : ['http://ad-ikaowo.qiniudn.com/ceo_13.png' + '?imageView2/2/w/' + width]
			},
			userId: {
				user_1 : ['843'],
				user_2 : ['406'],
				user_3 : ['2206'],
				user_4 : ['416'],
				user_5 : ['2555'],
				user_6 : ['563'],
				user_7 : ['1658'],
				user_8 : ['2551'],
				user_9 : ['469'],
				user_10: ['2619']
			}
		};
		$scope.$on('$viewContentLoaded', function () {
			//console.log(1)
			userAgent = new userAgent();
		});
	}]);