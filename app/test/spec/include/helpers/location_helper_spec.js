define( [ "js/include/helpers/main" ], function() {
	describe( "LocationHelper", function() {
		var LocationHelper = null;

		beforeEach( module( "helpers" ) );

		beforeEach( inject( function( _LocationHelper_ ) {
			LocationHelper = _LocationHelper_;
		} ) );

		it( "same values must be equal", function() {
			expect( LocationHelper.comparePaths( "/about", "/about" ) ).toBeTruthy();
		} );

		it( "values with or without slashes, but the same path should be equal", function() {
			expect( LocationHelper.comparePaths( "/about/", "about//" ) ).toBeTruthy();
			expect( LocationHelper.comparePaths( "/", "" ) ).toBeTruthy();
		} );

		it( "different values should not be equal", function() {
			expect( LocationHelper.comparePaths( "/gallery/", "about//" ) ).toBeFalsy();
		} );

		it( "nested paths must be validated as single ones", function() {
			expect( LocationHelper.comparePaths( "/gallery/1/", "gallery/1" ) ).toBeTruthy();
		} );
	} );
} );
