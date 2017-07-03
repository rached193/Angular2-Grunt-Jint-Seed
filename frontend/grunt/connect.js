var serveStatic = require('serve-static');
var modRewrite = require('connect-modrewrite');

module.exports = {
	options: {
		"port": 9000,
		"hostname": "localhost"
	},
	serve: {
		options: {
			open: true,
			middleware: function (connect) {
				return [
					modRewrite(['^[^\\.]*$ /index.html [L]']),
					serveStatic('.tmp'),
					connect().use(
						'/jspm_packages',
						serveStatic('./jspm_packages')
					),
					connect().use(
						'/app/styles',
						serveStatic('./app/styles')
					),
					connect().use(
						'/config.js',
						serveStatic('./config.js')
					),
					serveStatic('app')
				];
			}
		}
	}
}