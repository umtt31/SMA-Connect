const jwt = require("jsonwebtoken");

exports.authenticateToken = async (req, res, next) => {
    try {
      const token = req.cookies.jwt;
  
      if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
          if (err) {
            console.log(err.message);
            res.redirect('/login');
          } else {
            console.log(decodedToken, "auth token")
            next();
          }
        });
      } else {
        res.redirect('/login');
      }
    } catch (error) {
      res.status(401).json({
        succeeded: false,
        error: 'Not authorized',
      });
    }
  };
