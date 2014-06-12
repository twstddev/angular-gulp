define( [ 
	"js/modules/pages/directives/pages",
	"js/modules/pages/controllers/pages",
	"js/modules/pages/services/pages",
	"angular",
	"angular-ui-router"
	], function( PagesDirective, PagesController, PagesResource ) {
	/**
	 * @brief Loads pages module and it's dependencies.
	 */
	return angular.module( "pages", [ "ui.router", "helpers" ] )
		.directive( "ngPages", PagesDirective )
		.controller( "PagesController", PagesController )
		.factory( "PagesResource", PagesResource )
		.config( [ "$stateProvider", "$urlRouterProvider",
			function( $stateProvider, $urlRouterProvider ) {

			$stateProvider
				.state(
					"page",
					{
						url : "/:slug",
						templateUrl : "templates/modules/pages/page.html",
						controller : "PagesController"
					}
				);

			$urlRouterProvider.otherwise( "/" );
		} ] );
} );
