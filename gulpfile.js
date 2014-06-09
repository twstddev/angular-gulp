var gulp = require( "gulp" );
var path_helper = require( "path" );
var run_sequence = require( "run-sequence" );

GLOBAL.plugins = require( "gulp-load-plugins" )();

// a config object that contains main configuration for
// the application.
GLOBAL.config = {
	hostname : "localhost",
	port : 3000,
	base : "app",
	dist : "dist"
};

/**
 * @brief Converts given path to a relative to the application
 * path.
 *
 * @return String converted path
 */
GLOBAL.get_application_path = function( path ) {
	return path_helper.join( GLOBAL.config.base, path );
}

/**
 * @brief Calms down thrown errors.
 * Logs them instead of stopping gulp execution.
 */
GLOBAL.output_error = function( error ) {
	console.log( error.message );
}



// load tasks from the tasks directory
require( "gulp-load" )( gulp );
gulp.loadTasks( __dirname );

gulp.task( "development", function( done ) {
	run_sequence(
		"clean:build",
		"compass:build",
		"karma:watch",
		"livereload",
		"open",
		done
	);
} );

gulp.task( "test", [
	"karma:test"
] );

gulp.task( "default", function( done ) {
	run_sequence(
		"clean:build",
		"clean:dist",
		"compass:dist",
		done
	);
} );
