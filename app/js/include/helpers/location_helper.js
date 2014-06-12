define( [ "angular" ], function() {
	/**
	 * @brief Helper that adds some extra functionality
	 * for location and paths management and processing.
	 */
	var LocationHelper = function() {
	};

	/**
	 * @brief Compares given paths.
	 */
	LocationHelper.prototype.comparePaths = function( current_path, compare_to_path ) {
		return false;
	};

	return [ "$location", function( $location ) {
		return new LocationHelper();
	} ];
} );
