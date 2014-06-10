describe( "HeaderDirective", function() {
	var $compile = null;
	var $rootScope = null;

	beforeEach( function( done ) {
		require( [ "angular-mocks" ], function() {
			require( [ "js/modules/header/main" ], function() {
				module( "header" );

				inject( function( _$compile_, _$rootScope_ ) {
					$compile = _$compile_;
					$rootScope = _$rootScope_;
				} );

				done();
			} );
		} );
	} );

	it( "adds h1 title as a provided attribute", function() {
	} );
} );
