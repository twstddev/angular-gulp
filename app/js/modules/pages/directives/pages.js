define( [], function() {
	/**
	 * @brief Implements element that contains current page.
	 */
	var PagesDirective = {
		restrict : "A",
		scope : false,
		templateUrl : "templates/modules/pages/pages.html",
		replace : true
	};

	return function() {
		return PagesDirective;
	};
} );
