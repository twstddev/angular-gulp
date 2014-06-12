define( [ "js/modules/navigation/main" ], function() {
	describe( "NavigationDirective", function() {
		var element = null;
		var $scope = null;
		var $location = null;

		var items = [
			{
				title : "Home",
				url : "/"
			},
			{
				title : "About",
				url : "about"
			}
		];

		beforeEach( module( "templates" ) );
		beforeEach( module( "navigation" ) );

		beforeEach( inject( function( $compile, $rootScope, _$location_ ) {
			$location = _$location_;

			var template = $compile( "<div data-ng-navigation ng-controller=\"NavigationController\"></div>" );
			//$scope = $rootScope;
			element = template( $rootScope );
			element.scope().items = angular.copy( items );
			element.scope().$digest();
			//$scope.$digest();
		}) );


		it( "contains a list of passed items", function() {
			expect( element.find( "li" ).length ).toEqual( items.length );
		} );

		it( "adds a new item to the list", function() {
			element.scope().items.push( {
				title : "Gallery",
				url : "gallery"
			} );

			element.scope().$digest();

			expect( element.find( "li" ).length ).toEqual( items.length + 1 );
		} );

		it( "removes an item from the list", function() {
			element.scope().items.pop();

			element.scope().$digest();

			expect( element.find( "li" ).length ).toEqual( items.length - 1 );
		} );

		it( "makes item active on navigation", function() {
			element.find( "li" ).eq( 0 ).children( "a" ).click();

			expect( element.find( "li" ).eq( 0 ).hasClass( "active" ) ).toBeTruthy();
		} );

		it( "changes location on item click", function() {
			element.find( "li" ).eq( 0 ).find( "a" ).click();

			expect( $location.path() ).toEqual( items[ 0 ].url );
		} );
	} );
} );
