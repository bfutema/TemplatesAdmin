const express = require('express');
const middlewareAuth = require('../middleware/auth');

const router = express.Router();

router.get('/', middlewareAuth, (rq, rs, next) => {
    var User = rq.session.User;
    rs.render('pages/home', { title: 'Home', usuario: User });
});

module.exports = router;