define( [], function() {
	/**
	 * @brief Describes default directive for the header.
	 */
	var HeaderDirective = {
		restrict : "A",
		scope : {
			title : "@mainTitle"
		},
		templateUrl : "templates/modules/header/header.html",
		replace : true
	};

	return function() {
		return HeaderDirective;
	};
} );
