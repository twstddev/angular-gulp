define( [ "js/modules/pages/main" ], function() {
	describe( "PageModule", function() {
		it( "registers pages module", function() {
			expect( angular.module( "pages" ) ).toBeDefined();
		} );
	} );
} );
