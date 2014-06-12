define( [], function() {
	/**
	 * @brief Implements controller that handles navigation
	 * items.
	 */
	var NavigationController = function( $scope, $location, LocationHelper, MenuItemsResource ) {
		$scope.items = MenuItemsResource.query();

		/**
		 * @brief Takes an item and fires navigation event
		 * to change the current url and match the url of the item.
		 */
		$scope.processItem = function( item ) {
			$location.path( item.url );
		}

		/**
		 * @brief Checks whether the given item
		 * is the current location item.
		 */
		$scope.isCurrent = function( item ) {
			return LocationHelper.comparePaths( $location.path(), item.url );
		}
	};

	return [
		"$scope",
		"$location",
		"LocationHelper",
		"MenuItemsResource",
		NavigationController ];
} );
