/**
 * Created by Guoxing.han on 2015/5/19 0019.
 */
angular.module('spApp')
	.controller('helpContorller', ['$scope', 'userAgent', function ($scope, userAgent) {
		$scope.$on('$viewContentLoaded', function () {
			userAgent = new userAgent();
		});
	}]);