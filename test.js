var assert = require('assert');
var pam = require('./');

console.log(pam.getUserList());

var username = process.argv[2];
var password = process.argv[3];

console.log('try to authenticate with', username, password);
pam.authenticate(username, password,
	function(err) {
		if(err) {
			console.log("Login failure: " + err)
		}
		else {
			console.log("Authenticated!");
		}
	}, {'remoteHost': "localhost"}
);
