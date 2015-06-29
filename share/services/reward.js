(function() {
  angular.module('share').factory('rewardPages', [
    '$resource', 'Domains', function($r, domains) {
      var re;
      re = {
        reMony: $r('', {}, {
          cata: {
            url: domains.api + '/v1/tip/cata/:pro_u_id'
          }
        }),
        TipCreate: $r(domains.api + "/v1/tip")
      };
      re['allGet'] = function(params, cb) {
        var client_u_id, evp, pages_num, pro_u_id, tip_nx_id, tip_nx_type;
        evp = new EventProxy();
        pro_u_id = params.pro_u_id;
        client_u_id = params.client_u_id;
        tip_nx_type = params.tip_nx_type;
        tip_nx_id = params.tip_nx_id;
        pages_num = params.pages_num;
        return re.reMony.cata({
          pro_u_id: pro_u_id
        }, function(results) {
          return cb(false, {
            cata: results
          });
        }, function(err) {
          var errRe;
          if (err) {
            errRe = {
              re_err: err,
              point: 'rewardPages.re.reMony.cata',
              msg: '打赏类型error'
            };
            return cb(errRe);
          }
        });
      };
      return re;
    }
  ]);

}).call(this);

//# sourceMappingURL=reward.js.map
