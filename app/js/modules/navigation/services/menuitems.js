define( [], function() {
	/**
	 * @brief Implements resource that
	 * provides access to menu items from the
	 * back end server.
	 */
	var MenuItems = ( function() {
		// private scope
		var m_menu_items = [
			{
				title : "Home",
				url : "/"
			},
			{
				title : "About",
				url : "about"
			},
			{
				title : "Gallery",
				url : "gallery"
			}
		];

		return {
			// fakes resource request
			query : function() {
				return m_menu_items;
			}
		}
	} )();

	return function() {
		return MenuItems;
	}
} );
