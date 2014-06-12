define( [ "js/include/helpers/main" ], function() {
	describe( "HelpersModule", function() {
		it( "registers helpers module", function() {
			expect( angular.module( "helpers" ) ).toBeDefined();
		} );
	} );
} );
