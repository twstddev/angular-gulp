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
		replace : true
	};

	return function() { 
		return NavigationItemDirective;
	};
} );
