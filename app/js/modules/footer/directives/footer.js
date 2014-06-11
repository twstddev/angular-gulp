define( [], function() {
	/**
	 * @brief Describes default directive for the footer.
	 */
	var FooterDirective = {
		restrict : "A",
		scope : false,
		templateUrl : "templates/modules/footer/footer.html",
		replace : true
	};

	return function() {
		return FooterDirective;
	};
} );
