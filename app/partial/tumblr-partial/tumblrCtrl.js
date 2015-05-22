/**
 * Created by jyo on 15-3-19.
 */
angular.module('kaowoApp')
	.controller('tumblrCtrl', function ($scope, $stateParams, $state, kaowoService, _, $sce, $timeout, userAgent) {
		$scope.Datas = {};
		var getParamas = {
			u_id: ($state.params.u_id),
			imgw: $state.params.imgw
		}, k = $state.params.kk;
		$scope.trustSrc = function (src) {
			return $sce.trustAsResourceUrl(src);
		};
		async.parallel({
			'tumblrGet' : function (nexta) {
				kaowoService.tumblr.get({u_id: getParamas.u_id}, function (data) {
					var mp4Ary = [], imgObList = [];
					_.forEach(data.tumblr, function (value, index) {

						var isVideo = value['tbr_img'].indexOf('.mp4') > (-1);
						value['u_id'] = getParamas.u_id;
						if (isVideo) {
							//console.log("value['tbr_img']:",value['tbr_img']);
							//value['tbr_img']=value['tbr_img']+'?avthumb/vcodec/libx264';

							mp4Ary.push(value);
						} else {
							data.tumblr[index]['tbr_img'] += '?imageView2/2/w/' + (parseInt($state.params.imgw) + 200);
							//console.log(value.tbr_img);
							imgObList.push(data.tumblr[index]);
						}
					});
					return nexta(null, {
						imgObList: imgObList,
						mp4List  : mp4Ary
					});
				}, function () {
					return nexta('tumblr,error')
				})
			},
			'summaryGet': function (nexta) {
				kaowoService.summary.get({u_id: getParamas.u_id}, function (data) {
					return nexta(null, data.summary)
				}, function () {
					return nexta('summary,error')
				})
			},
			'tagsGet'   : function (nexta) {
				kaowoService.tags.get({u_id: getParamas.u_id}, function (data) {
					return nexta(null, data.tags)
				}, function () {
					return nexta('tags,error')
				})
			}

		}, function (err, results) {
			if (err) return alert(err);

			$scope.Datas['tags'] = results.tagsGet;
			$scope.Datas['summary'] = results.summaryGet;
			$scope.Datas['tumblr'] = results['tumblrGet']['imgObList'];
			$scope.Datas['mp4'] = results['tumblrGet']['mp4List'];

		});
		/*$scope.Btns = {
		 gibImg: function() {
		 window.location.href = getParamas.imgw;
		 }
		 };*/
		$scope.$on('$viewContentLoaded', function () {

			userAgent = new userAgent();
			var maindiv = document.getElementById("main");
			console.log(k);
			if (k != '1') {
				location.href = 'kaowo://tumblr/size?height=' + maindiv.offsetHeight;
			}
		});

	});