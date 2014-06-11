define( [ "js/modules/header/directives/header", "angular" ],
	function( HeaderDirective ) {
	/**
	 * @brief Loads header module and it's dependencies.
	 */
	return angular.module( "header", [] )
		.directive( "ngHeader", HeaderDirective );
} );
