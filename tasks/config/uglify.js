/**
 * Created by jyo on 15-3-26.
 * js min
 */
module.exports = function (grunt) {
    grunt.config.set('uglify', {
        main: {
            src : ['src/scripts/statistics.js'],
            dest: 'dist/src/scripts/statistics.js'
        },

        main_sp: {
            src : ['src/scripts/sp_userAgent.js'],
            dest: 'dist/src/scripts/sp_userAgent.js'
        },

        main_ng   : {
            src : ['src/scripts/ng_userAgent.js'],
            dest: 'dist/src/scripts/ng_userAgent.js'

        },
        main_share: {
            src : ['src/scripts/share_userAgent.js'],
            dest: 'dist/src/scripts/share_userAgent.js'

        },


        //ngapp
        'ngapp-lib': {
            options: {
                mangle: false,
                footer: '\n//<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> --ngapp-lib'
            },
            src    : [
                'bower_components/angular/angular.min.js',
                'bower_components/angular-sanitize/angular-sanitize.min.js',
                'bower_components/angular-sanitize/angular-sanitize.min.js',
                'bower_components/angular-resource/angular-resource.min.js',
                'bower_components/angular-animate/angular-animate.min.js',
                'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                'bower_components/lodash/dist/lodash.min.js',
                'bower_components/angular-lodash-module/angular-lodash-module.js',
                'bower_components/oclazyload/dist/ocLazyLoad.min.js',
                'bower_components/jquery/dist/jquery.min.js',
                //'bower_components/zepto/zepto.min.js',
                'bower_components/async/lib/async.js'
            ],
            dest   : 'dist/app/src/ngapp-lib.min.js'
        },
        'ngapp'    : {
            options: {
                mangle: false,
                footer: '\n//<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> --ngapp.app'
            },
            src    : [
                'app/ngApp.js'
            ],
            dest   : 'dist/app/src/ngapp.min.js'
        },
        'ngappCtrl': {
            options: {
                footer: '\n//<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> --app.config'
            },
            files  : [{
                expand: true,
                src   : ['app/partial/**/*.js'],
                dest  : 'dist',
                ext   : '.js'
            }]
        },

        //spapp
        'spapp-lib': {
            src : [
                'bower_components/angular/angular.min.js',
                'bower_components/angular-ui-router/release/angular-ui-router.js',
                'bower_components/lodash/dist/lodash.min.js',
                'bower_components/angular-resource/angular-resource.min.js',
                'bower_components/angular-lodash-module/angular-lodash-module.js',
                'bower_components/oclazyload/dist/ocLazyLoad.min.js'
            ],
            dest: 'dist/spApp/src/spapp-lib.min.js'
        },

        spapp    : {
            options: {
                mangle: false,
                footer: '\n//<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> --spapp.app'
            },
            src    : ['spApp/spApp.js'],
            dest   : 'dist/spApp/src/spapp.min.js'
        },
        spappCtrl: {
            files: [{
                expand: true,
                src   : ['spApp/partial/**/*.js'],
                dest  : 'dist',
                ext   : '.js'
            }]
        },

        //share
        'share-lib'     : {
            options: {
                mangle: false,
                footer: '\n//<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> --app.lib'
            },
            src    : [
                'bower_components/zepto/zepto.min.js',
                'share/src/js/eventProxy.js',
                'bower_components/idangerous-swiper/dist/idangerous.swiper.js',
                'bower_components/angular/angular.js',
                'bower_components/angular-sanitize/angular-sanitize.min.js',
                'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                'bower_components/lodash/dist/lodash.min.js',
                'bower_components/angular-resource/angular-resource.min.js',
                'bower_components/angular-lodash-module/angular-lodash-module.js',
                'bower_components/oclazyload/dist/ocLazyLoad.min.js'
            ],
            dest   : 'dist/share/src/lib.min.js'
        },
        'share-config'  : {
            options: {
                mangle: false,
                footer: '\n//<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> --app.config'
            },
            src    : [
                'share/app.js',
                'share/services/Domains.js'
            ],
            dest   : 'dist/share/src/app.config.js'
        },
        'share-app'     : {
            options: {
                footer: '\n//<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> --app.config'
            },
            //src    : [
            //	'share/partial/**/*.js',
            //	'share/services/*.js',
            //	'!share/services/Domains.js'
            //],
            //dest   : 'dist/share/src/app.min.js'

            files: [{
                expand: true,
                src   : ['share/partial/**/*.js'],
                dest  : 'dist',
                ext   : '.js'
            }]

        },
        'share-serveice': {
            options: {
                footer: '\n//<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> --app.config'
            },
            //src    : [
            //	'share/partial/**/*.js',
            //	'share/services/*.js',
            //	'!share/services/Domains.js'
            //],
            //dest   : 'dist/share/src/app.min.js'

            files: [{
                expand: true,
                src   : ['share/services/*.js'],
                dest  : 'dist',
                ext   : '.js'
            }]

        }

    });
    grunt.loadNpmTasks('grunt-contrib-uglify');

};