define( [ "js/src/application" ], function( Application ) {
	describe( "Application", function() {
		beforeEach( function() {
			spyOn( angular, "bootstrap" );
			Application.init( {} )
		} );
		
		it( "creates app module", function() {
			expect( angular.module( "app" ) ).toBeDefined();
		} );

		it( "bootstraps the document", function() {
			expect( angular.bootstrap ).toHaveBeenCalled();
		} );
	} );
} );
