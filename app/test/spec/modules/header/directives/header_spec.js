define( [ "js/modules/header/main" ], function() {
	describe( "HeaderDirective", function() {
		var element = null;
		var $scope = null;

		beforeEach( module( "templates" ) );
		beforeEach( module( "header" ) );

		beforeEach( inject( function( $compile, $rootScope ) {
			var template = $compile( "<div data-ng-header data-main-title='{{ mainTitle }}'></div>" );

			$scope = $rootScope;
			$scope.mainTitle = "";
			element = template( $scope );
		} ) );

		it( "contains h1 title", function() {
			$scope.$digest();

			expect( element.find( "h1" ).length ).toEqual( 1 );
		} );

		it( "adds h1 title as a provided attribute", function() {
			var custom_title = "My website";

			$scope.mainTitle = custom_title;
			$scope.$digest();

			expect( element.find( "h1" ).html() ).toEqual( custom_title );
		} );
	} );
} );
