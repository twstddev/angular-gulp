define( [ 
	"js/modules/navigation/directives/navigation",
	"js/modules/navigation/directives/navigation_item",
	"angular"
	],
	function( NavigationDirective, NavigationItemDirective ) {
	/**
	 * @brief Loads navigation module and it's dependencies.
	 */
	return angular.module( "navigation", [] )
		.directive( "ngNavigationItem", NavigationItemDirective )
		.directive( "ngNavigation", NavigationDirective );
} );
