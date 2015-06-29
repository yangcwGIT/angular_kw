/**
 * Created by han on 15-5-11.
 */
angular.module('spApp')
	//.controller('procertiCtrl', ['$scope', '$rootScope','spService', function ($scope, $rootScope,spService) {
	.controller('procertiCtrl', ['$scope', 'spService', 'userAgent', function ($scope, spService, userAgent) {
		var lwtDiv = document.getElementById("pro-certi");
		width = lwtDiv.offsetWidth * 2;
		//$rootScope.title = '认证中心';
		$scope.Datas = {
			imgs_header : [
				'http://ad-ikaowo.qiniudn.com/certi-header.jpg' + '?imageView2/2/w/' + width,
				'http://ad-ikaowo.qiniudn.com/certi-banner_01.jpg' + '?imageView2/2/w/' + width,
				'http://ad-ikaowo.qiniudn.com/certi-banner_02.jpg' + '?imageView2/2/w/' + width,
				'http://ad-ikaowo.qiniudn.com/certi-header_ender.jpg' + '?imageView2/2/w/' + width
			],
			imgs_top    : [
				'http://ad-ikaowo.qiniudn.com/certi_card_01_air.png' + '?imageView2/2/w/' + width
			],
			imgs_bottom1: [
				'http://ad-ikaowo.qiniudn.com/certi-card_02.jpg' + '?imageView2/2/w/' + width,
				'http://ad-ikaowo.qiniudn.com/certi-card_03.jpg' + '?imageView2/2/w/' + width
			],
			imgs_bottom2: [
				'http://ad-ikaowo.qiniudn.com/certi-card_04.jpg' + '?imageView2/2/w/' + width
			],
			oUid        : [],
			oName       : [],
			oIcon       : [],
			oTags       : [],
			proList     : [],
			oSummary    : []
		};
		spService.certiDate.get({}, function (data) {
			$scope.Datas.ttl = '待认证的“准智客”们...';
			var iconWidht = parseInt(Number(lwtDiv.offsetWidth) * (0.197));
			iconWidht < 80 ? iconWidht = 70 : '';
			_.forEach(data.pros, function (value, index) {
				//for(i=0;i<7;i++){
				//    data.pros[index].tags[i] = data.pros[index].tags[i] + " ";
				//}
				//console.log(data.pros[index].tags);
				$scope.Datas.iconWidht = iconWidht;
				$scope.Datas.proList[index] = index;
				$scope.Datas.oUid[index] = data.pros[index].u_id;
				$scope.Datas.oName[index] = data.pros[index].u_nickname;
				$scope.Datas.oIcon[index] = data.pros[index].icon;
				$scope.Datas.oTags[index] = data.pros[index].tags.join(" ");
				$scope.Datas.oSummary[index] = data.pros[index].summary;
				//console.log(data.pros[index].u_id);
			});
		}, function (error) {
			console.log('error:', error)
		});
		$scope.$on('$viewContentLoaded', function () {
			//console.log(1)
			userAgent = new userAgent();
		});
	}]);