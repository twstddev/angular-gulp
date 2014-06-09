module.exports = function( gulp ) {
	/**
	 * @brief A simple singleton implementation of 
	 * a livereload server.
	 */
	var Server = ( function() {
		// private scope
		var m_livereload = null;
		var m_base = "";

		/**
		 * @brief Starts a very simple server for
		 * the development.
		 */
		var startServer = function( config ) {
			var express = require( "express" );
			var server = express();

			// inject livereload middleware that adds script reference
			server.use( require( "connect-livereload" )() );
			// serve static files with express
			server.use( express.static( config.server.base_dir ) );
			// make sure that all other request redirect to
			// the main application file, which is index.html
			server.get( "*", function( request, response ) {
				response.sendfile( config.server.base_dir + "/index.html" );
			} );

			server.listen( config.server.port, config.server.host );
		};

		/**
		 * @brief Starts a tiny livereload instance.
		 */
		var startLivereload = function( config ) {
			m_livereload = require( "tiny-lr" )();
			m_livereload.listen( config.port );
		};

		return {
			/**
			 * @brief Fake constructor.
			 *
			 * @param[in] Object config is the list of
			 * configuration properties.
			 */
			init : function( config ) {
				m_base = config.server.base_dir;

				startServer( config );
				startLivereload( config.livereload );
			},

			/**
			 * @brief Notifies livereload about changes.
			 */
			updateLivereload : function( event ) {
				var file_name = require( "path" ).relative( m_base, event.path );

				m_livereload.changed( {
					body : {
						files : [ file_name ]
					}
				} );
			}
		}
	} )();

	var server_config = {
		// working server
		server : {
			host : GLOBAL.config.hostname,
			port : GLOBAL.config.port,
			base_dir : GLOBAL.config.base + "/"
		},
		// livereload server
		livereload : {
			host : GLOBAL.hostname,
			port : 35729
		}
	};

	// register development livereload server
	gulp.task( "livereload", function() {
		Server.init( server_config );

		var watch_files = [
			GLOBAL.config.base + "/**/*.*",
			// we'll use SASS livereload, so ignore sass files
			"!" + get_application_path( "sass/**/*.scss" )
		]

		gulp.watch( watch_files, function( event ) {
			Server.updateLivereload( event );
		} );
	} );

	// dist server that allows to preview compiled application
	gulp.task( "server:dist", function() {
		server_config.server.base_dir = GLOBAL.config.dist + "/";
		Server.init( server_config );
	} );
}
