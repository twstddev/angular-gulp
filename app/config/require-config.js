require.config( {
	baseUrl : "",
	paths : {
		"jquery" : "libs/jquery/dist/jquery",
		"jquery-migrate" : "libs/jquery-migrate/jquery-migrate",
		"angular" : "libs/angular/angular",
		"angular-ui-router" : "libs/angular-ui-router/release/angular-ui-router",
		"angular-animate" : "libs/angular-animate/angular-animate"
	},

	shim : {
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
		"angular-ui-router" : [ "angular" ],
		"angular-animate" : [ "angular" ]
	}
} );
