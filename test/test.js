var test   = require('tape');
var server = require('./server.test.js');
// we display the file (name) in each test name
var dir   = __dirname.split('/')[__dirname.split('/').length-1];
var file  = dir + __filename.replace(__dirname, '');

var email  = 'dwyl.test+auth_basic' +Math.random()+'@gmail.com';

var person = {
  "email"    : email,
  "password" : "PinkFluffyUnicorns"
}




test("register with brand new email and password", function(t) {
  var options = {
    method: "POST",
    url: "/register",
    payload : person
  };

  server.inject(options, function(response) {
    t.equal(response.statusCode, 200, "Base URL Does not Require ");
    server.stop(function(){ t.end() });
  });
});
