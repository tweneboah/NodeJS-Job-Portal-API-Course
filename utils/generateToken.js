const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  // Create a payload for the token
  const payload = {
    user: {
      id: user.id,
    },
  };

  // Sign the token with a secret key
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: 360000, // expires in 1h
  });

  return token;
};

module.exports = generateToken;
