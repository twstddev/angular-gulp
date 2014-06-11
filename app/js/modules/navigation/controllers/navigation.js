define( [], function() {
	/**
	 * @brief Implements controller that handles navigation
	 * items.
	 */
	var NavigationController = function( $scope ) {
		$scope.items = [
			{
				title : "Home",
				url : "/"
			},
			{
				title : "About",
				url : "about"
			}
		];
	};

	return [ "$scope", NavigationController ];
} );
