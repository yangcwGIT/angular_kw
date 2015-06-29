module.exports = function (grunt) {


	grunt.registerTask('build-ngapp', [
		
		//'jshint',
		'clean:app-before',
		//'less:production',
		'less:ngless',
		'dom_munger:read',
		'dom_munger:update',
		'dom_munger:ngapp',

		//'ngtemplates',

		'cssmin:main',

		'copy:main',
		'copy:srcimg',

		//'uglify',
		'uglify:main',
		'uglify:main_ng',
		'uglify:ngapp-lib',
		'uglify:ngapp',
		'uglify:ngappCtrl',


		'htmlmin:main',
		'htmlmin:nghtml',

		'clean:after'
	]);

	grunt.registerTask('build-spapp', [

		//'jshint',
		'clean:spapp-before',

		'less:spapp',

		//'dom_munger',
		'dom_munger:spapp',

		//'cssmin',
		'cssmin:main',

		'copy:spapp',
		'copy:srcimg',

		//'uglify',
		'uglify:main',
		'uglify:main_sp',
		'uglify:spapp-lib',
		'uglify:spapp',
		'uglify:spappCtrl',



		'htmlmin:spapp',
		'clean:after'
	]);

	grunt.registerTask('build-share', [
		'clean:share-before',
		'coffee',
		'less:share',
		'cssmin:main',

		'copy:share',
		'copy:srcimg',

		//'uglify:main',
		'uglify:main',
		'uglify:main_share',
		'uglify:share-lib',
		'uglify:share-config',
		'uglify:share-app',
		'uglify:share-serveice',

		'htmlmin:share',

		'dom_munger:share',
		'clean:after'
	])

};
