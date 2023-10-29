const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt')
};

exports.sanitizeUser = (user)=>{
    return {id:user.id, role:user.role}
}


exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2Q1ZmNjNGZhOTlmN2FmMGUyYTQ1YiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk4NTIxMDM2fQ.94yY0R3XSnzq_eaIkqteWOesFs12uSujZ7unZkCcWV4"

  return token;
};