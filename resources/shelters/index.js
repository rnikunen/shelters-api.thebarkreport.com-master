var lacounty = require('./lacounty');

module.exports = function(server) {
  server
    .get('/', require('./home'))
    .map('/lacounty', lacounty);
};
