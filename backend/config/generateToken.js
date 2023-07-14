const jwt = require('jsonwebtoken');
// require('dotenv').config();
const secret = 'hawtsauce';

const generateToken = (id) => {
    return jwt.sign({ id }, secret, {
        expiresIn: "30d",
    });
};

module.exports = generateToken;