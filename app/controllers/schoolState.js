/**
 * Created by jyo on 15-3-18.
 */
(function () {
    var k;
    avalon.state("school", {
        controller: "tumblr",
        url       : "/school",
        views     : {
            ""          : {
                templateUrl: 'app/views/school.html'
            }
        },
        onChange    : function () {

            document.getElementById('indexTitle').innerText = '专长学堂';
        }
    })
})();