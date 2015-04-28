/**
 * Created by jyo on 15-3-21.
 */
angular.module('kaowoApp')
    .controller('hotsellCtrl', function ($scope,kaowoService,_) {

        var lwtDiv = document.getElementById("partial"),
            width=lwtDiv.offsetWidth+100
            ;

        $scope.Datas={
            imgs:[
                'http://ad-ikaowo.qiniudn.com/hotsell-header_01.png'+'?imageView2/2/w/'+width,
                'http://ad-ikaowo.qiniudn.com/hotsell-bkzt_02.jpg'+'?imageView2/2/w/'+width,
                'http://ad-ikaowo.qiniudn.com/hotsell-header_03.png'+'?imageView2/2/w/'+width
            ]
        };

        kaowoService.rcmdtHotSell.get({}, function (data) {

             function keysrt(key,desc) {
                return function(a,b){
                    return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
                }
            }
            _.forEach(data.pros, function (value,index) {
                data.pros[index]['sq']=0;
                if(value.u_nickname=='秀出')
                    data.pros[index]['sq']=1;
                data.pros[index]['icon']=value.icon+'?imageView2/2/w/128'
            });
            var pros=[];
            pros=data.pros.sort(keysrt('sq'),true);
            console.log(pros);
            $scope.Datas['rcmdtProsList'] = pros;


         });




    });