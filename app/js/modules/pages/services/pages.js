define( [ "angular" ], function() {
	var LocationHelper = null;

	/**
	 * @brief Implements resource that
	 * provides access to pages from the
	 * back end server.
	 */
	var Pages = ( function() {
		var m_pages = [
			{
				title : "Home",
				slug : "/",
				body : "Home page content"
			},
			{
				title : "About",
				slug : "/about",
				body : "About page content"
			},
			{
				title : "Gallery",
				slug : "/gallery",
				body : "Gallery page content"
			},
		];

		/**
		 * @brief Returns the page that represents
		 * given slug.
		 */
		var getPageBySlug = function( slug ) {
			var current_page = m_pages[ 0 ];

			angular.forEach( m_pages, function( page ) {
				if( LocationHelper.comparePaths( slug, page.slug ) ) {
					current_page = page;
				}
			} );

			return current_page;
		};

		return {
			// fakes resource query
			query : function() {
			},

			// fakes resource get
			get : function( query ) {
				// this is just a testing resource and we know
				// what we are doing.
				return getPageBySlug( query.slug );
			}
		}
	} )();

	return [ "LocationHelper", function( _LocationHelper_ ) {
		LocationHelper = _LocationHelper_;

		return Pages;
	} ];
} );
