module.exports = function( gulp ) {
	var template_cache = require( "gulp-angular-templatecache" );
	var template_files = get_application_path( "templates/**/*.html" );

	var compile_angular_templates = function() {
		return gulp.src( template_files )
			.pipe( template_cache( {
				root : "templates/",
				standalone : true
			} ) )
			.pipe( gulp.dest( get_application_path( "js" ) ) );
	};

	gulp.task( "angular-templates", function() {
		compile_angular_templates();

		gulp.watch( template_files, compile_angular_templates );
	} );
}
