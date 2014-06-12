define( [ 
	"js/include/helpers/location_helper",
	"angular"
	],
	function( LocationHelper ) {
	/**
	 * @brief A simple module that registers
	 * all helper services under the "helpers" module
	 * name.
	 */
	angular.module( "helpers", [] )
		.factory( "LocationHelper", LocationHelper );
} );
