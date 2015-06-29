angular.module 'share'
.factory 'rewardPages', ['$resource', 'Domains', ($r, domains)->
    re =
        reMony: $r '', {}, {
            cata:
                url: domains.api + '/v1/tip/cata/:pro_u_id'
        }
        TipCreate: $r "#{domains.api}/v1/tip"

    re['allGet'] = (params, cb)->
        evp = new EventProxy()
        pro_u_id = params.pro_u_id
        client_u_id = params.client_u_id
        tip_nx_type = params.tip_nx_type
        tip_nx_id = params.tip_nx_id
        pages_num = params.pages_num
        re.reMony.cata {pro_u_id: pro_u_id},
            (results)->
                cb no, {cata: results}
            (err)->
                if err
                    errRe =
                        re_err: err
                        point: 'rewardPages.re.reMony.cata'
                        msg: '打赏类型error'
                    cb errRe

    #    re.TipCreate.save {
    #        client_u_id:client_u_id
    #        pro_u_id:pro_u_id
    #        tip_nx_type:tip_nx_type
    #        tip_nx_id:tip_nx_id
    #    }
    #        (success)->
    #            cb no,{data:success}
    #        (err)->
    #            console.log 'err:',err
    #    re.TipCreate.save {"client_u_id":3,"pro_u_id":1,"tip_price":"5.1","tip_nx_type":"ask","tip_nx_id":"456","tip_content":"somthing"},
    #        (data)->
    #            console.log 'success:',data
    #            window.location.href="#"
    #
    #        (err)->
    #            console.log 'err:',err
    return re
#        return{
##re
#            cata: $r('http://api.dev.ikaowo.com/v1/tip/cata/1', {}),
##cata:$r('http://api.dev.ikaowo.com/v1/tip/client/3/0/2',{}),
#        }
]