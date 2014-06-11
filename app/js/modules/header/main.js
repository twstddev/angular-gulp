define( [ 
	"js/modules/header/directives/header",
	"js/modules/navigation/main",
	"angular"
	],
	function( HeaderDirective ) {
	/**
	 * @brief Loads header module and it's dependencies.
	 */
	return angular.module( "header", [ "navigation" ] )
		.directive( "ngHeader", HeaderDirective );
} );
