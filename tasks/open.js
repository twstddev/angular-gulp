module.exports = function( gulp ) {
	/**
	 * @brief Opens the given path
	 * in a browser. Just saves couple of clicks :)
	 */
	var open_given_path = function( path ) {
		return gulp.src( path )
			.pipe( plugins.open( "", {
				url : [
					"http://",
					config.hostname,
					":",
					config.port
				].join( "" )
			} ) );
	};

	gulp.task( "open", function() {
		return open_given_path( get_application_path( "index.html" ) );
	} );
}
