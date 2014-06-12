define( [ 
	"js/modules/navigation/directives/navigation",
	"js/modules/navigation/directives/navigation_item",
	"js/modules/navigation/controllers/navigation",
	"js/modules/navigation/services/menuitems",
	"angular"
	],
	function( NavigationDirective,
		NavigationItemDirective,
		NavigationController,
		MenuItemsResource ) {
	/**
	 * @brief Loads navigation module and it's dependencies.
	 */
	return angular.module( "navigation", [ "helpers" ] )
		.controller( "NavigationController", NavigationController )
		.directive( "ngNavigationItem", NavigationItemDirective )
		.directive( "ngNavigation", NavigationDirective )
		.factory( "MenuItemsResource", MenuItemsResource );
} );
