define( [ "js/modules/footer/main" ], function() {
	describe( "FooterDirective", function() {
		var element = null;

		beforeEach( module( "templates" ) );
		beforeEach( module( "footer" ) );

		beforeEach( inject( function( $compile, $rootScope ) {
			var template = $compile( "<div data-ng-footer></div>" );

			element = template( $rootScope );
			$rootScope.$digest();
		} ) );

		it( "contains p element", function() {
			expect( element.find( "p" ).length ).toEqual( 1 );
		} );
	} );
} );
