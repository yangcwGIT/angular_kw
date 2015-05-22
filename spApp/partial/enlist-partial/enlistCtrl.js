/**
 * Created by jyo on 15-3-26.
 */
angular.module('spApp')
	.controller('enlistCtrl', ['$scope', 'userAgent', function ($scope, userAgent) {
		var lwtDiv = document.getElementById("enlist"),
			width = lwtDiv.offsetWidth + 300
			;
		$scope.Datas = {
			imgs: [
				'http://ad-ikaowo.qiniudn.com/zhaomu-image_01.png' + '?imageView2/2/w/' + width,
				'http://ad-ikaowo.qiniudn.com/zhaomu-image_02.png' + '?imageView2/2/w/' + width,
				'http://ad-ikaowo.qiniudn.com/enlist-image_change.03.png' + '?imageView2/2/w/' + width,
				'http://ad-ikaowo.qiniudn.com/enlist-image_last.png' + '?imageView2/2/w/' + width
			]
		};
		//console.log(angular.element('title'));
		$scope.$on('$viewContentLoaded', function () {
			//console.log(1)
			userAgent = new userAgent();
		});
	}]);