'use strict';

module.exports = function (grunt) {
	var path = require('path');
	
	// Configurable paths for the application
	var appConfig = {
		app:  'app',
		dist: 'dist'
	};
	
	
	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);
	
	// Load grunt tasks automatically just in time
	require('jit-grunt')(grunt, {
		ngconstant: 'grunt-ng-constant'
	});
	
	require('load-grunt-config')(grunt, {
		jitGrunt: true,
		configPath: path.join(process.cwd(), 'grunt'),
		data: {
			dashboard: appConfig, // accessible with '<%= dashboard %>'
		}
	});
	
	
	grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
		
		var env = 'development';
		
		if (target === 'offline') {
			env = 'offline';
		}
		
		grunt.task.run([
			// 'clean:server',
			// 'ngconstant:' + env,
			'less:build',
			// 'wiredep',
			// 'injector',
			// 'cssnano:dist',
			'connect:serve',
			'watch'
		]);
	});
};