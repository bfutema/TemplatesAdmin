const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (rq, rs, nxt) => {
    const token = rq.session.token;

    if (!token)
        return rs.redirect('/login');
    
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return rs.redirect('/login');

        rq.userId = decoded.id;
        return nxt();
    });
};