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

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  paths : {
	  "jquery" : "libs/jquery/dist/jquery",
	  "jquery-migrate" : "libs/jquery-migrate/jquery-migrate",
	  "angular" : "libs/angular/angular",
	  "angular-mocks" : "libs/angular-mocks/angular-mocks"
  },

  shims : {
	"jquery" : {
		exports : "$"
	},
	"jquery-migrate" : {
		deps : [ "jquery" ],
		exports : "$"
	},
	"angular" : {
		deps : [ "jquery" ],
		exports : "angular"
	},
	"angular-mocks" : {
		deps : [ "angular" ],
		exports : "angular.mock"
	}
	//priority : [ "angular" ]
  },


  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});

