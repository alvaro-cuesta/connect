
/**
 * Module dependencies.
 */

var connect = require('../');
var app = connect();

app.use(connect.directory(__dirname + '/../', { icons: true }))
app.listen(3000);
