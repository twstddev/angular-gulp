define( [ "angular" ], function() {
	// private scope
	// pattern that extracts value between leading and trailing slash
	var m_regex_pattern =  /^\/*(.*?)\/*$/;

	/**
	 * @brief Returns path without leading and trailing slashes.
	 */
	var m_process_path = function( path ) {
		return path.match( m_regex_pattern )[ 1 ];
	};

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
		return ( m_process_path( current_path ) === m_process_path( compare_to_path ) );
	};

	return [ "$location", function( $location ) {
		return new LocationHelper();
	} ];
} );
