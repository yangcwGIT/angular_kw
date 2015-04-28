/**
 * Created by jyo on 15-3-17.
 */
angular.module('kaowoApp')
    .controller('adCtrl', function ($scope,$rootScope) {

        var height = (window.innerHeight), width = (window.innerWidth);

        $scope.hidden = false;
        $scope.sty = {
            'show': false
        };
        $scope.imgbgs = {
            'page1': 'http://ad-ikaowo.qiniudn.com/brand_01_air.png?imageMogr2/thumbnail/' + width + '',
            'page2': 'http://ad-ikaowo.qiniudn.com/brand_02.png?imageMogr2/thumbnail/' + width,
            'page3': 'http://ad-ikaowo.qiniudn.com/brand_03.png?imageMogr2/thumbnail/' + width,
            'page4': 'http://ad-ikaowo.qiniudn.com/brand_bg_04_1.png?imageMogr2/thumbnail/' + width,
            'page5': 'http://ad-ikaowo.qiniudn.com/brand_05_air.png?imageMogr2/thumbnail/' + width,

        };


        var started = false;
        $scope.Btn = {
            startRoll: function () {
                if (!started) {
                    $.fn.fullpage.moveSectionDown();
                    started = true;
                }

            },
            endRoll  : function () {
                console.log('endRoll');
                $.fn.fullpage.moveTo('page2');
            }
        };
        $scope.sty['page4'] = {'background-image': "url('http://ad-ikaowo.qiniudn.com/brand_bg_04_0.png?imageMogr2/thumbnail/x" + height + "')"};
        //$scope.sty['img4']='http://ad-ikaowo.qiniudn.com/brand_bg_04_0.png?imageMogr2/thumbnail/x'+height;
        $scope.sty['img4'] = 'http://ad-ikaowo.qiniudn.com/brand_bg_04_0_p1.png?imageMogr2/thumbnail/' + width + '';
        $scope.sty['img4Size'] = {width: '100%', height: window.innerHeight};

        $scope.$on('show', function (data) {
            $('.breathing').show();
        });



        $scope.$on('$viewContentLoaded', function () {
            //setTimeout(function () {
            var section = $('.section');
            var loadedSection = (section.width());
            $('.breathing').hide();

            $scope.sty['page1'] = {
                'z-index'         : ' -2',
                'text-align'      : 'center',
                'background-image': "url('http://ad-ikaowo.qiniudn.com/brand_bg_01_full.png?imageMogr2/thumbnail/" + loadedSection + "x" + "')"
            };

            //},1250);

            var fp;
            //Here your view content is fully loaded !!
            $(function () {
                fp = $('#dowebok').fullpage({
                    continuousVertical: false,
                    afterRender       : function (anchorLink, index) {

                        //$scope.sty['show']=true;
                        //using index
                    },
                    afterLoad         : function (a, index) {
                        started = false;

                        //if(index==3){
                        //console.log('loadedSection:',loadedSection);
                        //$scope.sty['page4']=
                        //    {'background-image':"url('http://ad-ikaowo.qiniudn.com/brand_bg_04_0.png?imageMogr2/thumbnail/"+loadedSection+"x"+"')"}
                        //;
                        //
                        //$('#spage4').css(
                        //        'background-image',"url('http://ad-ikaowo.qiniudn.com/brand_bg_04_0.png?imageMogr2/thumbnail/x"+loadedSection
                        //    );
                        //}
                    }
                });

                //console.log(fp);
                //var fp=new Fullpage({
                //    id:'dowebok'
                //})
            });

        });



    });
