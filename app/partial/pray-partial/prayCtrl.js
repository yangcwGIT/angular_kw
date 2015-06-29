/**
 * Created by Guoxing.han on 15-6-6.
 */
angular.module('kaowoApp')
	.controller('prayCtrl', ['$scope','$rootScope','kaowoService', function ($scope,$rootScope,kaowoService) {

		var height = (window.innerHeight), width = (window.innerWidth)*2;

		$scope.imgbgs = {
			'page1': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/pray-prat_01.png?imageMogr2/thumbnail/' + width + '',
			'page2': 'http://7xaw9f.com2.z0.glb.qiniucdn.com/pray-prat_02.png?imageMogr2/thumbnail/' + width
		};


		kaowoService.prayPage.get({},function(data){
			$scope.reNum = data.re;
			$rootScope.title="爱心接力：已有"+$scope.reNum+"人为东方之星沉轮游客祈福";
			$rootScope.content="祈福·东方之星";
		},function(error){
			console.log(error);
		});



		$scope.static={
			'showPage':true,
			'candle':true
		};
		$scope.showPage1=function(){
			$("#J_onepage1").fadeOut();
			$("#J_onepage2").fadeIn(500);
			kaowoService.prayPage.save(function (data) {
				console.log(data);
				$scope.reNum = data.re
			}, function (err) {
				if(err.data&&err.data.msg)
					return  alert(err.data.msg);
			})

		};
		$scope.showPage=function(){
			$scope.static={
				'showPage':false
			};
		};
		$scope.showCandle=function(){
			$scope.static={
				'candle':false
			};
		};
		//music
		$scope.playMusic=function(){
			var audio = document.getElementById('music');
			if(audio!==null){
				if(audio.paused){
					audio.play();
					$("#J_music").removeClass("music-btn2").addClass("music-btn");
				}else{
					audio.pause();
					$("#J_music").removeClass("music-btn").addClass("music-btn2");
				}
			}
		}


		$scope.$on('$viewContentLoaded', function () {
			//userAgent = new userAgent();



			var fp,top;

			$(function () {
				fp = $('#dowebok').fullpage({
					continuousVertical: false,
					afterRender       : function (anchorLink, index) {

					},
					afterLoad         : function (a, index) {
						started = false;

					}
				});
				top=$("#toplist").rollGallery({
					direction:"top",
					speed:2000,
					showNum:4
				});

			});
		});
	}]);
