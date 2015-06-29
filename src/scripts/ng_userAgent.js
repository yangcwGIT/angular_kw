/**
 * Created by Guoxing.han on 2015/5/22 0022.
 *
 * userAgent() //控制app中底栏刷新&前进&回退按钮 方法
 *
 */
angular.module('kaowoApp').factory('userAgent', ['$resource', '$location', function ($r, $l) {
	function userAgent() {
		//ios
		var iosEvent = function () {
			//console.log(navigator.userAgent);
			if (document.getElementById('J_pageData') != undefined) {
				var _val = document.getElementById('J_pageData').value;
				var _obj = eval('(' + _val + ')');
				location.href = 'kaowo://showBottomAll?showRefresh=' + _obj.showRefresh + '&showBack=' + _obj.showBack + '&showForward=' + _obj.showForward + '&showBottom=' + _obj.showBottom;
			}
		}
		//android
		var androidEvent = function () {
			//console.log(navigator.userAgent);
			if (document.getElementById('J_pageData') != undefined) {
				var _val = document.getElementById('J_pageData').value;
				var _obj = eval('(' + _val + ')');
				//console.log(_obj);
				//console.log(_obj.showRefresh);
				//if (_obj.showRefresh === "T") {
				//	webViewControl.showRefresh(true);
				//} else {
				//	webViewControl.showRefresh(false);
				//}
				//if (_obj.showBack === "T") {
				//	webViewControl.showBack(true);
				//} else {
				//	showForward.showBack(false);
				//}
				//if (_obj.showForward === "T") {
				//	webViewControl.showForward(true);
				//} else {
				//	webViewControl.showForward(false);
				//}
				//if (_obj.showBottom === "T") {
				//	webViewControl.showBottom(true);
				//} else {
				//	webViewControl.showBottom(false);
				//}
				if (_obj.showBottom == "T") {
					webViewControl.showBottom(true);
					if (_obj.showRefresh == "T") {
						webViewControl.showRefresh(true);
					}
					if (_obj.showForward == "T") {
						webViewControl.showForward(true);
					}
					if (_obj.showBack == "T") {
						webViewControl.showBack(true);
					}
				}
				else{
					webViewControl.showBottom(false);
					webViewControl.showRefresh(false);
					webViewControl.showForward(false);
					webViewControl.showBack(false);
				}
			}
		}
		if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
			iosEvent();
		}
		else if (/(Android)/i.test(navigator.userAgent)) {
			androidEvent();
		}
	}
	return userAgent;
}])