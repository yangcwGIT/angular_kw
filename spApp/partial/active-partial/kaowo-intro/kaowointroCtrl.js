/**
 * Created by han on 15-5-8.
 */
angular.module('spApp')
	.controller('kaowointroCtrl', ['$scope', '$rootScope','userAgent', function ($scope, $rootScope,userAgent) {
		var introDiv = document.getElementById("kaowoIntro"),
			width = introDiv.offsetWidth * 2;
		if(introDiv.offsetWidth=414){
			width = introDiv.offsetWidth * 3
		}
		$rootScope.title = '靠我平台介绍';
		$scope.Datas = {
			images: [
				'http://ad-ikaowo.qiniudn.com/kaowointro_01.png' + '?imageView2/2/w/' + width,
				'http://ad-ikaowo.qiniudn.com/kaowointro_02.png' + '?imageView2/2/w/' + width,
				'http://ad-ikaowo.qiniudn.com/kaowointro_03.png' + '?imageView2/2/w/' + width
			]
		};
		$scope.$on('$viewContentLoaded', function () {
			//console.log(1)
			userAgent = new userAgent();
		});
	}]);