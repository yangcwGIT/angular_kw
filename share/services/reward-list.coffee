angular.module 'share'
.factory 'rewardPages', ['$resource', 'Domains', ($r, domains)->
    re =

        tipClient: $r '', {}, {
            client:
                url: domains.api + '/v1/tip/pro/:pro_u_id/:start_page/:datas_num'
        }


    re['allGet'] = (params, cb)->
        evp = new EventProxy()
        pro_u_id = params.pro_u_id
        start_page = params.start_page
        datas_num = params.datas_num

        re.tipClient.client {
                pro_u_id: pro_u_id
                start_page: start_page
                datas_num: datas_num
            },
            (results)->
                cb no, {client: results}
            (err)->
                if err
                    errRe =
                        re_err: err
                        point: 'rewardPages.re.tipClient.client'
                        msg: '打赏列表error'
                    cb errRe


    return re

]