const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  if (Object.keys(req.cookies).length === 0) {
    return models.Sessions.create()
      .then(result => {
        return models.Sessions.get({id: result.inserId});
      })
      .tap(session =>{
        // if(!session){
        //   throw session;
        // }
        res.cookie('shortlyid', session.hash);
      })
      .then(session =>{
        req.session = session;
        next();
      });
    // .catch(() => {
    //   return req.session;
    // });
  }
};


/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

