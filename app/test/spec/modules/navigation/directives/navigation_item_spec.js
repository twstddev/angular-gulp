define( [ "js/modules/navigation/main" ], function() {
	describe( "NavigationItemDirective", function() {
		var element = null;

		beforeEach( module( "templates" ) );
		beforeEach( module( "navigation" ) );

		beforeEach( inject( function( $compile, $rootScope ) {
			var template = $compile( "<div data-ng-navigation-item></div>" );
			var menu_item = {
				title : "Home",
				url : "/"
			};

			$scope = $rootScope;
			$scope.item = menu_item;

			element = template( $scope );
			$scope.$digest();
		} ) );

		it( "is a LI element", function() {
			expect( element.is( "li" ) ).toBeTruthy();
		} );

		it( "contains A element", function() {
			expect( element.children( "a" ).length ).toEqual( 1 );
		} );

		xit( "A element has href equal to item url", function() {
			expect( element.children( "a" ).eq( 0 ).attr( "data-ng-href" ) ).toEqual( $scope.item.url );
		} );
	} );
} );
