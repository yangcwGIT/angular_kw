(function() {
  angular.module('share').controller('mineCtrl', [
    '$scope', '$stateParams', '$state', '_', '$sce', 'jqMineTab', 'mineTab', '$timeout', '$rootScope', function(scope, stateP, state, _, sce, jqMineTab, Service, $t, $rootScope) {
      var imgwParam, input, maindiv, tumblrSet, width;
      maindiv = document.getElementById("main");
      width = maindiv.offsetWidth + 200;
      imgwParam = '?imageView2/2/w/';
      input = {
        u_id: state.params.u_id
      };
      scope.sty = {
        imgMgTop: {
          'margin-top': (-200) * 1 + 1. + 'px'
        }
      };
      scope.trustSrc = function(src) {
        return sce.trustAsResourceUrl(src);
      };
      scope.Datas = {
        tumblr: [],
        tags: [],
        userInfo: {},
        poList: [],
        cmmtList: [],
        mp4: [],
        cIcons: []
      };
      tumblrSet = function(data) {
        if (data['tbr_img'].indexOf('.mp4') > (-1)) {
          return scope.Datas.mp4.push(data);
        } else {
          data['tbr_img'] += imgwParam + width;
          return scope.Datas.tumblr.push(data);
        }
      };
      scope.cls = {
        stars: {
          1: 'kw_star1',
          2: 'kw_star2',
          3: 'kw_star3',
          4: 'kw_star4',
          5: 'kw_star5'
        }
      };
      scope.Btns = {
        schema: function() {
          window.location.href = 'kaowo://user/mainpage?uid=' + input.u_id;
          return $t(function() {
            return window.location.href = 'http://fir.im/kaowo?u_id=' + input.u_id;
          }, 100, true);
        }
      };
      Service.allGet(input.u_id, function(err, datas) {
        var i, len, ref, tumblr;
        if (err) {
          return alert(err.data.msg);
        }
        if (datas.userInfo['ui_icon']) {
          datas.userInfo['ui_icon_hide'] = datas.userInfo['ui_icon'] + (imgwParam + 300);
          datas.userInfo['ui_icon'] += imgwParam + 192;
        } else {
          datas.userInfo['ui_icon'] = 'share/src/images/ui_icon.png';
        }
        if (datas.userInfo['backcover']) {
          datas.userInfo['backcover'] += imgwParam + width;
        } else {
          datas.userInfo['backcover'] = 'share/partial/mine-partial/images/backcover.png';
        }
        scope.Datas.userInfo = datas.userInfo;
        scope.Datas.alPrice = datas.userInfo.al_price;
        scope.Datas.price = datas.userInfo.price;
        $rootScope.title = scope.Datas.userInfo.nickname + " - 「靠我」智慧交易平台";
        $rootScope.content = scope.Datas.userInfo.ui_summary;
        scope.Datas.userInfo.rich_summary = scope.Datas.userInfo.rich_summary.replace(/\r\n|\r|\n/gi, '<br />');
        scope.Datas.userInfo.rich_summary = scope.Datas.userInfo.rich_summary.replace(/<br \/><br \/>|<br \/><br \/><br \/>|<br \/><br \/><br \/><br \/>/gi, '<br/>');
        scope.Datas.rich_summary = scope.Datas.userInfo.rich_summary;
        ref = datas.tumblr;
        for (i = 0, len = ref.length; i < len; i++) {
          tumblr = ref[i];
          tumblrSet(tumblr);
        }
        scope.Datas.poList = datas.poList;
        scope.Datas.cmmtList = datas.cmmtList;
        scope.Datas.tags = datas.tags;
        scope.Datas.cIcons = datas.porList.cicons;
        scope.Datas.gotNum = datas.porList.got_num;
        if (scope.Datas.gotNum > 0) {
          scope.Datas.urlTo = "/h5/share.html#/reward-list/" + input.u_id;
        } else {
          scope.Datas.urlTo = "/h5/share.html#/reward-null";
        }
        scope.Datas.isproReturn = scope.Datas.userInfo.ispro === 'T';
        scope.Datas.isproReturnF = scope.Datas.userInfo.ispro !== 'T';
        if (scope.Datas.isproReturnF) {
          document.getElementById("j_isproF").style.width = 0;
          document.getElementById("j_isproF").style.height = 0;
          return document.getElementById("j_isproF").style.overflow = 'hidden';
        }
      });
      return scope.$on('$viewContentLoaded', function() {
        var jqTable;
        return jqTable = new jqMineTab();
      });
    }
  ]);

}).call(this);

//# sourceMappingURL=mineCtrl.js.map
