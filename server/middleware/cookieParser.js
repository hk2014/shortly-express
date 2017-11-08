
const parseCookies = (req, res, next) => {
  if (req.headers.cookie !== undefined) {
    var cookie = req.headers.cookie.split(';');
    var obj = {};
    for (var i = 0; i < cookie.length; i++) {
      var current = cookie[i].trim().split('=');
      obj[current[0]] = current[1];
    }
    req.cookies = obj;
  } else {
    req.cookies = {};
  }
  next();
};
    
 
module.exports = parseCookies;



