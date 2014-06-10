describe( "HeaderDirective", function() {
	beforeEach( function( done ) {
		console.log( done );
		require( [ "angular-mocks" ], function() {
			console.log( "suka" );
			done();
		} );
	} );

	it( "adds h1 title as a provided attribute", function() {
	} );
} );
