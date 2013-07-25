module.exports = function(handle) {
  handle('request', function(env, next) {
    env.response.statusCode = 200;
    env.response.body = {
      links: [ { rel: env.helpers.rel('animals'), href: env.helpers.uri('/animals/' + env.config.location) } ]
    };

    next(env);
  });
};

