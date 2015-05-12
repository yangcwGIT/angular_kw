/**
 * Created by jyo on 15-3-14.
 */
(function () {
    var k;
    avalon.state("certi", {
        controller: "tumblr",
        url       : "/certi",
          views     : {
            ""          : {
                templateUrl: 'app/views/certi.html'
            }
        },
        onChange    : function (vm) {
            document.getElementById('indexTitle').innerHTML = '认证中心';
            require(['certiService'], function (certiService) {
                certiService.GetProStaD({},function (err,querys) {
                    if (!err) {
                        avalon.vmodels.tumblr.datas.certi.ttl='待认证的“准专家”们...';

                        var mainDiv = document.getElementById("main");
                        var iconWidht=parseInt(Number(mainDiv.offsetWidth)*(0.197));
                        iconWidht<80?iconWidht=70:'';

                        //if(iconWidht<) 测试
                        querys['pros'].forEach(function (data,index) {
                            querys['pros'][index]['icon']+='?imageMogr/v2/thumbnail/!'+iconWidht+'x'+iconWidht+'r';
                        });

                        avalon.vmodels.tumblr.datas.certi['prosList']=querys['pros'];
                        avalon.vmodels.tumblr.datas.certi['icon_height']=iconWidht;


                    }
                });
            });
        },onAfterLoad: function (){
            document.getElementById('indexTitle').innerHTML = '认证中心';
        }



    })
})();