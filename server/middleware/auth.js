const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  console.log(req.cookies);
  if (req.cookies === undefined) {
    return models.Session.create()
      .then(result => {
        
      })
  }
  next();

};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

