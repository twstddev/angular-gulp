define( [], function() {
	/**
	 * @brief Describes navigation directive, that acts
	 * as a navigation menu on the website.
	 */
	var NavigationDirective = {
		restrict : "A",
		scope : false,
		//controller : "NavigationController", 
		templateUrl : "templates/modules/navigation/navigation.html",
		replace : true
	};

	return function() {
		return NavigationDirective;
	};
} );
