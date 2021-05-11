var express = require("express");
var app = express();

//app.use(express.static(__dirname));

var server = app.listen(3000, (app) => {
  console.log(`Server is listening on ${server.address().port}`);
});
