define( [ "js/modules/navigation/main" ], function() {
	describe( "NavigationDirective", function() {
		var element = null;
		var $scope = null;
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

		beforeEach( inject( function( $compile, $rootScope ) {
			var template = $compile( "<div data-ng-navigation></div>" );
			$scope = $rootScope;
			$scope.items = angular.copy( items );

			element = template( $scope );
			$scope.$digest();
		}) );


		it( "contains a list of passed items", function() {
			expect( element.find( "li" ).length ).toEqual( items.length );
		} );

		it( "adds a new item to the list", function() {
			$scope.items.push( {
				title : "Gallery",
				url : "gallery"
			} );

			$scope.$digest();

			expect( element.find( "li" ).length ).toEqual( items.length + 1 );
		} );

		it( "removes an item from the list", function() {
			$scope.items.pop();

			$scope.$digest();

			expect( element.find( "li" ).length ).toEqual( items.length - 1 );
		} );

		it( "makes item active on navigation", function() {
			element.find( "li" ).eq( 0 ).children( "a" ).click();

			expect( element.find( "li" ).eq( 0 ).hasClass( "active" ) ).toBeTruthy();
		} );
	} );
} );
