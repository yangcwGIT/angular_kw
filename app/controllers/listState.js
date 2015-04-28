/**
 * Created by jyo on 15-3-5.
 */

(function () {
    var k;
    avalon.state("list", {
        controller: "tumblr",
        url       : "/list",
        views     : {
            ""          : {
                templateUrl: 'app/views/tumblr-list.html'
            }
        },
        onChange    : function () {
            console.log('list-state.......');
            function setEnv() {
                if(window.location.href.indexOf('m.dev.ikaowo')>(-1)){
                    console.log('window.location.href');
                    return 'prepro';
                }else if(window.location.href.indexOf('m.ikaowo')>(-1)){
                    return  'main';
                }else{
                    return   'dev'
                }
            }
            var
                u_id = this.query.u_id,
                width = this.query.imgw,
                host=tumblr.hosts[setEnv()]
                ;


                tumblr['list']['width']=width;
                k=this.query.kk;


            avalon.get(
                host+ '/user/tumblr/' + u_id, function (ajaxData) {
                    var tumblrList = (ajaxData['tumblr']);
                    var mp4Ary=[];
                    tumblrList.forEach(function (data, index) {

                        var isVideo=data['tbr_img'].indexOf('.mp4')>(-1);

                        if(isVideo){
                            mp4Ary.push(data);
                        }

                        if ((data['tbr_img'].indexOf('.mp4')==(-1))&&data['tbr_img'].indexOf('.com') > (-1)) {
                            tumblrList[index]['tbr_img'] = data['tbr_img']+'?imageView2/2/w/'+(parseInt(width)+200);
                        }else{
                             delete tumblrList[index];
                        }
                    });



                    tumblrList=tumblrList.sort();
                    var imgObList=[];
                    tumblrList.forEach(function (data) {
                        if(data) imgObList.push(data);
                    });

                    tumblr['list']['listdata'] = imgObList;
                    tumblr['list']['listmp4']=mp4Ary;
                }
            );

            avalon.get(
                host+'/user/summary/'+u_id, function (ajaxData) {
                    tumblr['list']['summary']=ajaxData['summary'];
                }
            );

            avalon.get(
                host+'/tags/'+u_id, function (data) {
                    tumblr['list']['tags']=data['tags'];
                }
            );

        },
        /*onBeforeLoad: function () {
         console.log("caonima");
         },*/

        onAfterLoad : function () {

            setTimeout(function () {

                var maindiv = document.getElementById("main");
                if (k != '1') {
                    location.href = 'kaowo://tumblr/size?height=' + maindiv.offsetHeight;
                }

                //alert(maindiv.offsetWidth);

             },1500);

        }
    });


}());


//var gAllImages = [];
//
//function makeThumbDivs(thumbnailsBegin, thumbnailsEnd)
//{
//    gAllImages = [];
//
//    for (var i = thumbnailsBegin; i < thumbnailsEnd; i++)
//    {
//        var theImage = new Image();
//        theImage.src = "thumbs/" + getFilename(globals.gAllPageGUIDs[i]);
//        gAllImages.push(theImage);
//
//        setTimeout('checkForAllImagesLoaded()', 5);
//        window.status="Creating thumbnail "+(i+1)+" of " + thumbnailsEnd;
//
//        // make a new div containing that image
//        makeASingleThumbDiv(globals.gAllPageGUIDs[i]);
//    }
//}
//
//function checkForAllImagesLoaded()
//{
//    for (var i = 0; i < gAllImages.length; i++) {
//        if (!gAllImages[i].complete) {
//            var percentage = i * 100.0 / (gAllImages.length);
//            percentage = percentage.toFixed(0).toString() + ' %';
//
//            userMessagesController.setMessage("loading... " + percentage);
//            setTimeout('checkForAllImagesLoaded()', 20);
//            return;
//        }
//    }
//
//    userMessagesController.setMessage(globals.defaultTitle);
//}