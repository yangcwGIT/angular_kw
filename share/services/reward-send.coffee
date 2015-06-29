angular.module 'share'
.factory 'rewardPages', ['$resource', 'Domains', ($r, domains)->
	re =

		tipClient: $r '', {}, {
			tip:
				url: domains.api + '/v1/tip/:tip_id'
		}

	re['allGet'] = (params, cb)->
		evp = new EventProxy()
		tip_id = params.tip_id

		re.tipClient.tip {
				tip_id: tip_id
			},
			(results)->
				cb no, {tip: results}
			(err)->
				if err
					errRe =
						re_err: err
						point: 'rewardPages.re.tipClient.tip'
						msg: '打赏详情error'
					cb errRe


	return re

]