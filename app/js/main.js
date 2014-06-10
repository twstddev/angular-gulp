// first make sure that requirejs config is loaded as it contains
// all the main configuration for the application
//>>excludeStart( "configExclude", pragmas.configExclude );
require( [ "../config/require-config" ], function() {
//>>excludeEnd( "configExclude" );

	// implicitly load main application dependencies
	require( [ "jquery-migrate", "angular" ], function() {
		// load application
		require( [ "js/src/application" ], function( Application ) {
			Application.init( {} );
		} );
	} );
//>>excludeStart( "configExclude", pragmas.configExclude );
} );
//>>excludeEnd( "configExclude" );
