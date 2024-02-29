const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const secretKey = process.env.JWT_SECRET

// Middleware to authenticate user
// (Authentication middleware goes here)
exports.authenticateUser = (req, res, next) => {
    let token = req.header("Authorization");
    if (!token) {
    return res.status(401).json({ message: "Unauthorized. Token is missing." });
    }
    token = token.split(" ")[1];
    try {
    const verified = jwt.verify(token, secretKey);
    req.user = verified;
    next();
    } catch (err) { res.status(400).json({ message: 'Invalid token' });
    }}