var argo = require('argo');
var config = require('./config');
var middleware = require('./middleware');
var resources = require('./resources');

var server = argo()
  .use(middleware.config(config))
  .use(middleware.helpers)
  .use(middleware.database)
  .use(middleware.cors)
  .use(middleware.errors)
  .get('/', resources.home)
  .map('/shelters', resources.shelters);

server.listen(config.port);

console.log('ShelterTech API listening on ' + config.baseHrefUri);
