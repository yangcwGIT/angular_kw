/**
 * Created by han on 15-5-7.
 */
angular.module('spApp')
    .controller('linklistCtrl', ['$scope', 'spService', function ($scope, spService) {
        //console.log(spService);

        spService.linkDate.get({}, function (data) {
            //console.log('data:', data);
            var _width = (window.innerWidth), iconWidth;
            //console.log(_width);
            if (_width == 414) {
                iconWidth = 120
            }
            else if (_width == 375) {
                iconWidth = 70
            }
            else {
                iconWidth = 50
            }
            $scope.Dates = {
                lName   : [],
                lTarget : [],
                lIcon   : [],
                cmmtList: []
            }

            _.forEach(data.tags, function (value, index) {

                //                console.log(data.tags[index].t_name);
                //                console.log(data.tags[index].data.target);
                //                console.log(data.tags[index].data.icon);
                //console.log(data.tags);
                //tags.linkDate.

                //if (data.tags[index].t_name != "更多") {
                //   console.log(index);
                //index++;

                $scope.Dates.cmmtList[index] = index;
                $scope.Dates.lName[index] = data.tags[index].t_name;
                $scope.Dates.lTarget[index] = data.tags[index].data.target;
                $scope.Dates.lIcon[index] = data.tags[index].data.h5_icon + '?imageView2/2/w/' + iconWidth
                //}

            });
            //console.log(data.search);
            $scope.Search = data.search;
            $scope.Btns = {};
            $scope.Btns["search"] = function (Datesearch) {
                //console.log(Datesearch.name);
                window.location.href = "kaowo://search?keywords=" + Datesearch.name;

            }
            //console.log($scope.Dates.lIcon);
        }, function (error) {
            console.log('error:', error)
        });

    }]);
