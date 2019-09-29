const express = require('express');
const request = require('request');

const router = express.Router();

router.get('/login', (rq, rs) => {
    rs.render('pages/auth/login', { title: 'Login' });
});

router.post('/login', (rq, rs) => {
    var resposta = 'Bearer ';

    var options = {
        url: 'http://localhost:9000/auth/authenticate',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        json: rq.body
    };

    request(options, (error, response, body) => {
        rq.session.token = body.token;
        rq.session.User = body.user;
        console.log(body);
        if (body.token != null) {
            rs.redirect('/');
        } else {
            rs.redirect('/auth/login');
        }
    });
});

router.get('/register', (rq, rs) => {
    rs.render('pages/auth/register', { title: 'Registrar' });
});

router.post('/register', (rq, rs) => {
    var options = {
        url: 'http://localhost:9000/auth/register',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        json: rq.body
    };

    request(options, (error, response, body) => {
        rq.session.token = body.token;
        rq.session.User = body.user;
        if (body.token != null) {
            rs.redirect('/auth/login');
        } else {
            rs.redirect('/auth/register');
        }
    });
});

router.get('/forgotPassword', (rq, rs) => {
    rs.render('pages/auth/forgot-password', { title: 'Esqueceu sua senha?' });
});

router.post('/logout', (rq, rs) => {
    rq.session.token = null;
    console.log('passei');
    rs.redirect('/auth/login');
});

module.exports = router;