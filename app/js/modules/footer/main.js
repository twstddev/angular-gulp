define( [ "js/modules/footer/directives/footer", "angular" ],
	function( FooterDirective ) {
	/**
	 * @brief Loads footer module and it's dependencies.
	 */
	return angular.module( "footer", [] )
		.directive( "ngFooter", FooterDirective );
} );
