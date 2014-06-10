define( [ "js/modules/header/directives/header", "angular" ],
	function( HeaderDirective ) {
	/**
	 * @brief Loads header module and it's dependencies.
	 */
	angular.module( "header", [] )
		.directive( "header", HeaderDirective );
} );
