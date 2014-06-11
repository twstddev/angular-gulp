define( [], function() {
	/**
	 * @brief Describes navigation item, that changes
	 * location on click.
	 */
	var NavigationItemDirective = {
		restrict : "A",
		scope : false,
		require : [ "^ngNavigation", "?ngRepeat" ],
		templateUrl : "templates/modules/navigation/navigation_item.html",
		controller : [ "$scope", function( $scope ) {
			if ( $scope.item ) {
				$scope.title = $scope.item.title;
				$scope.url = $scope.item.url;
			}
		} ],
		replace : true
	};

	return function() { 
		return NavigationItemDirective;
	};
} );
