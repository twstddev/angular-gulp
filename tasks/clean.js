module.exports = function( gulp ) {
	// development clean task
	gulp.task( "clean:build", function() {
		var build_files = [
			get_application_path( "css" )
		];

		return gulp.src( build_files, { read : false } )
			.pipe( plugins.clean( { force : true } ) );
	} );

	// production clean task
	gulp.task( "clean:dist", function() {
		return gulp.src( GLOBAL.config.dist, { read : false } )
			.pipe( plugins.clean( { force : true } ) );
	} );
}
