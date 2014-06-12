module.exports = function( gulp ) {
	gulp.task( "requirejs", function() {
		return plugins.requirejs( {
			baseUrl : get_application_path( "" ),
			out : "main.js",
			removeCombined : true,
			findNestedDependencies : true,
			include : [ 
				"config/require-config",
				"requirejs",
				"angular-templates"
			],
			name : "js/main",
			wrapShim : true,
			optimizeAllPluginResources : true,
			paths : {
				"requirejs" : "libs/requirejs/require",
			   	"angular-templates" : "js/templates",
				"jquery" : "libs/jquery/dist/jquery",
			   	"jquery-migrate" : "libs/jquery-migrate/jquery-migrate",
				"angular" : "libs/angular/angular",
				"angular-ui-router" : "libs/angular-ui-router/release/angular-ui-router",
				"angular-animate" : "libs/angular-animate/angular-animate"
			},

			pragmas : {
				configExclude : true
			},

			shim : {
				"jquery" : {
					exports : "$"
				},
				"jquery-migrate" : {
					deps : [ "jquery" ],
					exports : "$"
				},
				"angular" : {
					deps : [ "jquery" ],
					exports : "angular"
				},
				"angular-ui-router" : [ "angular" ],
				"angular-animate" : [ "angular" ]
			}


		} )
			.pipe( plugins.uglify() )
			.pipe( gulp.dest( config.dist + "/js" ) );
	} );
}
