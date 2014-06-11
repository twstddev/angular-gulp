define( [ "js/modules/navigation/directives/navigation", "angular" ],
	function( NavigationDirective ) {
	/**
	 * @brief Loads navigation module and it's dependencies.
	 */
	return angular.module( "navigation", [] )
		.directive( "ngNavigation", NavigationDirective );
} );
