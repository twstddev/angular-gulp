/**
 * @brief This file contains definition of the
 * main( core ) file of the application.
 * It bootstraps angular framework and loads 
 * application modules.
 */
define( [ 
	"angular",
	"js/modules/header/main",
	"js/modules/footer/main",
	"js/include/helpers/main"
	],
	function() {
	// private scope
	var m_angular_app = null;

	/**
	 * @brief Bootstraps application and adds ng-app to 
	 * document.
	 */
	var bootstrapApp = function() {
		angular.bootstrap( document, [ "app" ] );
	}

	/**
	 * @brief Creates angular module named "app".
	 */
	var createAngularApp = function( config ) {
		m_angular_app = angular.module( "app", [
			"header",
			"footer"
		] )
			.config( [ "$locationProvider", function( $locationProvider ) {
				$locationProvider.html5Mode( true );
			} ] );
	}

	/**
	 * @brief A singleton wrapper around core
	 * functionality.
	 */
	var Application = ( function() {
		return {
			/**
			 * @brief Fake constructor.
			 *
			 * @param[in] Object config is a list of potential 
			 * configuration values
			 */
			init : function( config ) {
				createAngularApp( config );
				bootstrapApp();
			}
		}
	} )();

	return Application;
} );
