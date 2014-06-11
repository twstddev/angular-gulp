define( [ "js/modules/header/main" ], function() {
	describe( "HeaderDirective", function() {
		var element = null;
		var scope = null;

		beforeEach( module( "header" ) );

		beforeEach( inject( function( $compile, $rootScope ) {
			var template = $compile( "<div data-ng-header></div>" );
			scope = $rootScope;
			element = template( scope );
		} ) );

		it( "adds h1 title as a provided attribute", function() {
			var custom_title = "My website";

			expect( element.find( "h1" ).length ).toEqual( 1 );

			scope.mainTitle = custom_title;
			scope.$digest();
			expect( element.find( "h1" ).html() ).toEqual( custom_title );
		} );
	} );
} );
