var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
	// Normalize paths to RequireJS module names.
	allTestFiles.push(pathToModule(file));
  }
});

require( [ "/base/config/require-config.js" ], function() {
	require.config( {
		baseUrl : "/base",

		paths : {
			"angular-mocks" : "libs/angular-mocks/angular-mocks"
		},

		shim : {
			"angular-mocks" : [ "angular" ]
		}
	} );

	require( [ "angular-mocks" ], function() {
		require.config( {
			deps : allTestFiles,
			callback : window.__karma__.start
		} );
	} );
} );
