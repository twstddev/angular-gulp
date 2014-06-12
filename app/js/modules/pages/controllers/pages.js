define( [], function() {
	/**
	 * @brief Implements controller that gets requested
	 * page data and set it to the scope.
	 */
	var PagesController = function( $scope, $stateParams, PagesResource ) {
		var current_page = PagesResource.get( {
			slug : $stateParams.slug
		} );

		$scope.page = current_page;
	};

	return [ "$scope", "$stateParams", "PagesResource", PagesController ];
} );
