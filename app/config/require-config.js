require.config( {
	baseUrl : "",
	paths : {
		"jquery" : "libs/jquery/dist/jquery",
		"jquery-migrate" : "libs/jquery-migrate/jquery-migrate",
		"angular" : "libs/angular/angular"
	}

	shim : {
		"jquery" : {
			exports : "$"
		},
		"jquery-migrate" : {
			deps : [ "jquery" ],
			exports : "$"
		},
		"angular" : {
			exports : "angular"
		}
	}
} );
