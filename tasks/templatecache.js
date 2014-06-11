module.exports = function( gulp ) {
	var template_cache = require( "gulp-angular-templatecache" );

	gulp.task( "angular-templates", function() {
		return gulp.src( get_application_path( "templates/**/*.html" ) )
			.pipe( template_cache( {
				root : "templates/",
				standalone : true
			} ) )
			.pipe( gulp.dest( get_application_path( "js" ) ) );
	} );
}
