define( [], function() {
	/**
	 * @brief Implements controller that handles navigation
	 * items.
	 */
	var NavigationController = function( $scope, $location ) {
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

		/**
		 * @brief Takes an item and fires navigation event
		 * to change the current url and match the url of the item.
		 */
		$scope.processItem = function( item ) {
			$location.path( item.url );
		}

		// listen to URL changes and mark item as the current one
		$scope.$on( "$locationChangeSuccess", function() {
		} );
	};

	return [ "$scope", "$location", NavigationController ];
} );
