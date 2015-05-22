/**
 * Created by jyo on 15-3-26.
 */
module.exports = function (grunt) {
	grunt.config.set('dom_munger', {
		read  : {
			options: {
				read: [
					{selector: 'script[data-concat!="false"]', attribute: 'src', writeto: 'appjs'},
					{selector: 'link[rel="stylesheet"][data-concat!="false"]', attribute: 'href', writeto: 'appcss'}
				]
			},
			src    : 'index.html'
		},
		update: {
			options: {
				remove: ['script[data-remove!="false"]', 'link[data-remove!="false"]'],
				append: [
					{
						selector: 'body',
						html    : '<script async>(function(){window.location.href="/h5/simple.html#/kaowointro"})();</script>'
					}
					//	{
					//		selector: 'head',
					//		html    : '<link rel="stylesheet" href="app/less/certi.less" type="text/css"/><script src="http://cdn.bootcss.com/less.js/1.7.0/less.min.js"></script><link rel="stylesheet" href="app.full.min.css">'
					//	}
				]
			},
			src    : 'index.html',
			dest   : 'dist/index.html'
		},
		//ngapp
		ngapp: {
			options: {
				remove : ['script[data-remove!="false"]', 'link[data-remove!="false"]'],
				append : [
					{
						selector: 'body',
						html    : '<script src="app/src/ngapp-lib.min.js" ></script>' +
							//'<script src="app/ngApp.js" ></script>' +
						'<script src="app/src/ngapp.min.js" ></script>' +
						'<script src="src/scripts/ng_userAgent.js" ></script>'+
						'<script>var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "//hm.baidu.com/hm.js?5daa07686fd658851aa29e92ee6f58aa";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();</script>'
					}
				],
				prepend: [
					{
						selector: 'head',
						html    : '<link rel="stylesheet" href="src/styles/common.min.css" type="text/css"/>'
					}
				]
			}, src : 'retina.html',
			dest   : 'dist/retina.html'
		},
		//spapp
		spapp: {
			options: {
				remove : ['script[data-remove!="false"]', 'link[data-remove!="false"]'],
				append : [
					{
						selector: 'body',
						html    : '<script src="spApp/src/spapp-lib.min.js" ></script>' +
						'<script src="spApp/src/spapp.min.js" ></script>' +
						'<script src="src/scripts/sp_userAgent.js" ></script>'
					}
				],
				prepend: [
					{
						selector: 'head',
						html    : '<link rel="stylesheet" href="src/styles/common.min.css" type="text/css"/>'
					}
				]
			}, src : 'simple.html',
			dest   : 'dist/simple.html'
		},
		//share
		share: {
			options: {
				remove : ['script[data-remove!="false"]', 'link[data-remove!="false"]'],
				append : [
					{
						selector: 'body',
						html    : '<script src="share/src/lib.min.js" ></script>' +
						'<script src="share/src/app.config.js" ></script>' +
						'<script src="share/src/app.min.js" ></script>' +
						'<script>var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "//hm.baidu.com/hm.js?5daa07686fd658851aa29e92ee6f58aa";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();</script>'
					}
					//{
					//	selector: 'head',
					//	html    : '<link rel="stylesheet" href="share/src/css/app.full.min.css?v=<%= grunt.template.today("yyyymmddHHMMss") %>" type="text/css"/>'
					//
					//}
				],
				prepend: [
					{
						selector: 'head',
						html    : '<link rel="stylesheet" href="src/styles/common.min.css" type="text/css"/>' +
						'<link rel="stylesheet" href="share/src/css/app.full.min.css?v=<%= grunt.template.today("yyyymmddHHMMss") %>" type="text/css"/>'
					}
				]
			},
			src    : 'share.html',
			dest   : 'dist/share.html'
		}
	})
	;
	grunt.loadNpmTasks('grunt-dom-munger');
}
;