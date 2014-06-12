define( [ 
	"js/modules/navigation/directives/navigation",
	"js/modules/navigation/directives/navigation_item",
	"js/modules/navigation/controllers/navigation",
	"angular"
	],
	function( NavigationDirective, NavigationItemDirective, NavigationController ) {
	/**
	 * @brief Loads navigation module and it's dependencies.
	 */
	return angular.module( "navigation", [ "helpers" ] )
		.controller( "NavigationController", NavigationController )
		.directive( "ngNavigationItem", NavigationItemDirective )
		.directive( "ngNavigation", NavigationDirective );
} );
