/**
 * Created by han on 15-5-8.
 */
angular.module('spApp')
	.controller('kaowoschoolCtrl', ['$scope', '$rootScope','userAgent', function ($scope, $rootScope,userAgent) {
		var introDiv = document.getElementById("kaowoIntro"),
			width = introDiv.offsetWidth * 2;
		if(introDiv.offsetWidth=414){
			width = introDiv.offsetWidth * 3
		}
		$scope.Datas = {
			images: [
				'http://7xaw9f.com2.z0.glb.qiniucdn.com/school-image_01.png' + '?imageView2/2/w/' + width,
				'http://7xaw9f.com2.z0.glb.qiniucdn.com/school-image_02.png' + '?imageView2/2/w/' + width,
				'http://7xaw9f.com2.z0.glb.qiniucdn.com/school-image_03.png' + '?imageView2/2/w/' + width,
				'http://7xaw9f.com2.z0.glb.qiniucdn.com/school-image_04.png' + '?imageView2/2/w/' + width,
				'http://7xaw9f.com2.z0.glb.qiniucdn.com/school-image_05.png' + '?imageView2/2/w/' + width,
				'http://7xaw9f.com2.z0.glb.qiniucdn.com/school-image_06.png' + '?imageView2/2/w/' + width,
				'http://7xaw9f.com2.z0.glb.qiniucdn.com/school-image_07.png' + '?imageView2/2/w/' + width,
				'http://7xaw9f.com2.z0.glb.qiniucdn.com/school-image_08.png' + '?imageView2/2/w/' + width,
				'http://7xaw9f.com2.z0.glb.qiniucdn.com/school-image_09.png' + '?imageView2/2/w/' + width,
				'http://7xaw9f.com2.z0.glb.qiniucdn.com/school-image_10.png' + '?imageView2/2/w/' + width,
				'http://7xaw9f.com2.z0.glb.qiniucdn.com/school-image_11.png' + '?imageView2/2/w/' + width,
				'http://7xaw9f.com2.z0.glb.qiniucdn.com/school-image_12.png' + '?imageView2/2/w/' + width
			]
		};
		$scope.$on('$viewContentLoaded', function () {
			//console.log(1)
			userAgent = new userAgent();
		});
	}]);