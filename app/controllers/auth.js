var User                        = require('../models/user');
var UnauthorizedAccessError     = require('../../lib/errors/unauthorizedAccessError');
var jwtAuth                     = require('../../lib/jwtAuth');


exports.postAuthenticate = function(req, res, next) {

  var name     = req.body.name,
      password = req.body.password;

  // Find the user
  User.findOne({
    name: name
  }, function(err, user) {

    if (err) {
      return next(new Error());
    } else {

      if (!user) return next(new UnauthorizedAccessError());

      // Check if password matches
      user.comparePassword(password,  function(err, isMatch) {

        // If any error or password did not match
        if (err || !isMatch) {
          return next(new UnauthorizedAccessError());
        }

        // If password matches
        // Create a token
        var token = jwtAuth.createToken(user);
        // Return the information including token as JSON
        res.json({
          success: true,
          user_id: user._id,
          access_token: token
        });
      });
    }
  });

}
