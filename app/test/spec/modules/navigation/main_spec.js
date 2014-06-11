define( [ "js/modules/navigation/main" ], function() {
	describe( "NavigationModule", function() {
		it( "registers navigation module", function() {
			expect( angular.module( "navigation" ) ).toBeDefined();
		} );
	} );
} );
