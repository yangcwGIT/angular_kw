/**
 * Created by jyo on 15-3-10.
 */
(function () {
    var k;
    avalon.state("about", {
        controller: "tumblr",
        url       : "/about",
        views     : {
            ""          : {
                templateUrl: 'app/views/school.html'
            }
        },
        onChange    : function () {

            document.getElementById('indexTitle').innerText = '专长学堂';




        },onAfterLoad: function () {
            var mainDiv = document.getElementById("school"),
                width=mainDiv.offsetWidth,
                widthParam='?imageView2/2/w/';
            var sch=[
                'http://ad-ikaowo.qiniudn.com/sch2-image_01.png',
                'http://ad-ikaowo.qiniudn.com/sch2-image_02.png',
                'http://ad-ikaowo.qiniudn.com/sch2-image_03.png',
                'http://ad-ikaowo.qiniudn.com/sch2-image_04.png',
                'http://ad-ikaowo.qiniudn.com/sch2-image_05.png',
                'http://ad-ikaowo.qiniudn.com/sch2-image_06.png',
                'http://ad-ikaowo.qiniudn.com/sch2-image_07.png',
                'http://ad-ikaowo.qiniudn.com/sch2-image_08.png',
                'http://ad-ikaowo.qiniudn.com/sch2-image_09.png',
                'http://ad-ikaowo.qiniudn.com/sch2-image_10.png'
            ];
            for(var i in sch){
                sch[i]+=(widthParam+width);
                avalon.vmodels.tumblr.datas["sch"].push(sch[i]);
            }
        }
    })
})();