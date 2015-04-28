/**
 * Created by jyo on 15-3-11.
 */
(function () {
    function regexPhone(phone) {
        var regex = {
            mobile: /^0?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
        };

        var patt1=new RegExp(regex.mobile);

        return patt1.test(phone);
    }


     avalon.state("recruit", {
        controller: "tumblr",
        url       : "/recruit",
        views     : {
            ""          : {
                templateUrl: 'app/views/recruit.html'
            },

        },
        onChange    : function () {

            var maindiv = document.getElementById("main");
            var width=maindiv.offsetWidth;

            var imgList=[
                {url:'http://ad-ikaowo.qiniudn.com/recruit-01.png?imageView2/2/w/'+(width+200)},
                {url:'http://ad-ikaowo.qiniudn.com/recruit-02.png?imageView2/2/w/'+(width+200)},
                {url:'http://ad-ikaowo.qiniudn.com/recruit-03.png?imageView2/2/w/'+(width+200)},
                {url:'http://ad-ikaowo.qiniudn.com/recruit-04.png?imageView2/2/w/'+(width+200)}
            ];

            tumblr['recruit']={
                imgList:imgList,
                formdata:{
                    name:"",
                    phone:"",
                    summary:""
                },
                sty:{show:'block',height:0,thanksShow:'none',thanksWidth:0,lineHeight:0},
                submit: function (data) {
                    if(!regexPhone(data.phone)){
                        return alert('电话号码格式不正确');
                    }
                    if(!data.name||data.name.length<1){
                        return  alert('请输入姓名');
                    }
                    if(!data.name||data.summary.length<1){
                        return  alert('请输入技能介绍');
                    }
                    var that=tumblr['recruit'];
                  
                    tumblr['services']['recruit'].phoneCheck(data.phone, function (err) {
                        if(err) return alert(err);
                        tumblr['services']['recruit'].postForm(data, function (re) {
                            var recruitDiv = document.getElementById("pro-form");
                            that.sty.show='none';
                            that.sty.thanksShow='block';
                            console.log(re);
                        });
                    });

                    //that.sty.thanksWidth='100%';

                    console.log(data.name);
                    console.log(data.phone);
                    console.log(data.summary);
                }
            };
        },
         onAfterLoad: function () {
             var maindiv = document.getElementById("main");
             var width=maindiv.offsetWidth;
             //alert(width);
         }
    })
})();