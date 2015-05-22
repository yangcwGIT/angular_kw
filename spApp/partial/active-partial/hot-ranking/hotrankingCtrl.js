/**
 * Created by han on 15-5-8.
 */
angular.module('spApp')
	.controller('hotrankingCtrl', ['$scope', '$rootScope', 'userAgent', function ($scope, $rootScope, userAgent) {
		var hotDiv = document.getElementById("hotRanking"),
			width = hotDiv.offsetWidth * 2;
		if (hotDiv.offsetWidth = 414) {
			width = hotDiv.offsetWidth * 3
		}
		//$rootScope.title = 'hot排行榜';
		$scope.Datas = {
			images: {
				images_header: [
					'http://ad-ikaowo.qiniudn.com/hotranking_01.png' + '?imageView2/2/w/' + width,
					'http://ad-ikaowo.qiniudn.com/hotranking_02.png' + '?imageView2/2/w/' + width,
					'http://ad-ikaowo.qiniudn.com/hotranking_03.png' + '?imageView2/2/w/' + width
				],
				imgs_1       : ['http://ad-ikaowo.qiniudn.com/hotranking_04.png' + '?imageView2/2/w/' + width],
				imgs_2       : ['http://ad-ikaowo.qiniudn.com/hotranking_05.png' + '?imageView2/2/w/' + width],
				imgs_3       : ['http://ad-ikaowo.qiniudn.com/hotranking_06.png' + '?imageView2/2/w/' + width],
				imgs_4       : ['http://ad-ikaowo.qiniudn.com/hotranking_07.png' + '?imageView2/2/w/' + width],
				imgs_5       : ['http://ad-ikaowo.qiniudn.com/hotranking_08.png' + '?imageView2/2/w/' + width],
				imgs_6       : ['http://ad-ikaowo.qiniudn.com/hotranking_09.png' + '?imageView2/2/w/' + width],
				imgs_7       : ['http://ad-ikaowo.qiniudn.com/hotranking_10.png' + '?imageView2/2/w/' + width],
				imgs_8       : ['http://ad-ikaowo.qiniudn.com/hotranking_11.png' + '?imageView2/2/w/' + width]
			},
			userId: {
				user_1: ['408'],
				user_2: ['411'],
				user_3: ['405'],
				user_4: ['407'],
				user_5: ['1315'],
				user_6: ['410']
			}
		};
		$scope.view1 = false;
		$scope.btnHtml1 = '点击查看更多';
		$scope.toggle1 = function () {
			$scope.view1 = !$scope.view1;
			if ($scope.view1) {
				$scope.btnHtml1 = '点击关闭更多';
			}
			else {
				$scope.btnHtml1 = '点击查看更多';
			}
		};
		$scope.view2 = false;
		$scope.btnHtml2 = '点击查看更多';
		$scope.toggle2 = function () {
			$scope.view2 = !$scope.view2;
			if ($scope.view2) {
				$scope.btnHtml2 = '点击关闭更多';
			}
			else {
				$scope.btnHtml2 = '点击关闭更多';
			}
		};
		$scope.view3 = false;
		$scope.btnHtml3 = '点击查看更多';
		$scope.toggle3 = function () {
			$scope.view3 = !$scope.view3;
			if ($scope.view3) {
				$scope.btnHtml3 = '点击关闭更多';
			}
			else {
				$scope.btnHtml3 = '点击关闭更多';
			}
		};
		$scope.$on('$viewContentLoaded', function () {
			//console.log(1)
			userAgent = new userAgent();
		});
	}]);