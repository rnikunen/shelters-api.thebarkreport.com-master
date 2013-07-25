var transit = require('./data/animals');

module.exports = function(addHandler) {
  addHandler('request', function(env, next) {
    transit.links = [
      { rel: 'self', href: env.helpers.uri('/shelters/' + env.config.location + env.request.url) },
      { rel: 'index', href: env.helpers.uri('/shelters/') + env.config.location }
    ];
    env.response.statusCode = 200;
    env.response.body = animals;
    next(env);
  });
};