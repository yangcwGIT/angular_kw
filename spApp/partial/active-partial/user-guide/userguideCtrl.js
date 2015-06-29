/**
 * Created by han on 15-5-8.
 */
angular.module('spApp')
	.controller('userguideCtrl', ['$scope', '$rootScope','userAgent', function ($scope, $rootScope,userAgent) {
		var introDiv = document.getElementById("kaowoIntro"),
			width = introDiv.offsetWidth * 2;
		if(introDiv.offsetWidth=414){
			width = introDiv.offsetWidth * 3
		}
		$scope.Datas = {
			images: [
				'http://7xaw9f.com2.z0.glb.qiniucdn.com/user-pages_01.png' + '?imageView2/2/w/' + width,
				'http://7xaw9f.com2.z0.glb.qiniucdn.com/user-pages_02.png' + '?imageView2/2/w/' + width,
				'http://7xaw9f.com2.z0.glb.qiniucdn.com/user-pages_03.png' + '?imageView2/2/w/' + width,
				'http://7xaw9f.com2.z0.glb.qiniucdn.com/user-pages_04.png' + '?imageView2/2/w/' + width,
				'http://7xaw9f.com2.z0.glb.qiniucdn.com/user-pages_05.png' + '?imageView2/2/w/' + width
			]
		};
		$scope.$on('$viewContentLoaded', function () {
			//console.log(1)
			userAgent = new userAgent();
		});
	}]);