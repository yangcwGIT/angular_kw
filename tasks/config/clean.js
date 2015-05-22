/**
 * Created by jyo on 15-3-26.
 */
module.exports = function (grunt) {



    grunt.config.set('clean',{
        'app-before': {
            src: ['dist/app','temp']
        },
        'spapp-before':{
            src: ['dist/spApp', 'temp']
        },
        'share-before':{
            src:['dist/share','temp']
        },
        after : {
            src: ['temp']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};
