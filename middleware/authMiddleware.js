const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if(!token) {
        return res.status(401).json({error: 'Access denied'});
    }
    try {
        const decoded = jwt.verifyToken(token, 'your-secret-key');
        res.userId = decoded.userId;
        next();
    } catch(error) {
        console.log(error);
        res.status(401).json({error: 'Invalid token'})
    }
}

module.exports = verifyToken;
