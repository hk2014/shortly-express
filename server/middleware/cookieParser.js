
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
  // }
  // for (var i = 0; i< cookieKeyValue.length; i++) {
  //   if(i%2===0){
  //     req.cookies[cookieKeyValue[i]] = cookieKeyValue[i+1];
  //   }else{
  //     let cookie = cookieKeyValue[i+1].pop();
  //     req.cookies[cookieKeyValue[i]] = cookie;
  //   }
  // }
};
    
    
    
    // if (req.headers) {
    //   console.log('headers', req.headers)
    //   var cookieKeyValue = req.headers.cookie.split('=');
    // }
    // if (cookieKeyValue.length === 2) {
    //   console.log('type:',typeof cookieKeyValue);
    //   console.log(cookieKeyValue[0]);
    //   req.cookies = {cookieKeyValue0 : cookieKeyValue[1]};
    // }

    // if (cookieKeyValue.length > ) {
    //   console.log('more than one cookie', )
    // }
    // if (cookieKeyValue.length === 2) {
    //   var cookieKeyValue = req.headers.cookie.split('=');
    //   req.cookies = {cookieKeyValue[0] : cookieKeyValue[1]}
    // } else {
    //   var 
    //   cookieKeyValue.forEach(function(cookie){
        
    //   })

  // var rc = req.headers.cookie;
  // if (req.headers.cookie) {
  //   req.headers.cookie.split(';').forEach(function(cookie) {
  //     var parts = cookie.split('=');
  //     console.log('parts',parts);
  //   });
  // }
    // console.log('cookie', cookieKey);
    // return req.cookies;
module.exports = parseCookies;



