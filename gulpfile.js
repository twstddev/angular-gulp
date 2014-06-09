var gulp = require( "gulp" );

var run_sequence = require( "run-sequence" );

GLOBAL.plugins = require( "gulp-load-plugins" )();

// load tasks from the tasks directory
require( "gulp-load" )( gulp );
gulp.loadTasks( __dirname );

gulp.task( "development", function( done ) {
	run_sequence(
		done
	);
} );
