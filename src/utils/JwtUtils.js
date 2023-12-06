const jwt = require("jsonwebtoken");
const { jwtSecretKey, jwtExpired } = require("../configs/auth");

const generateToken = (user) => {
    return jwt.sign(user, jwtSecretKey, { expiresIn: jwtExpired });
};

module.exports = generateToken;