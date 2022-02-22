const express = require('express');
const passport = require('passport');
const routerAuth = express.Router();

const ctrlAuth = require('../controllers/ctrlAuth');
const mdlAuth = require('../middlewares/mdlAuth');

routerAuth.route('/auth/login')
    .post(mdlAuth.isAnon, mdlAuth.loginIsValid, passport.authenticate('local'), ctrlAuth.login);

routerAuth.route('/auth/logout')
    .post(mdlAuth.isConnected, ctrlAuth.logout);

routerAuth.route('/auth/register')
    .post(mdlAuth.registerIsValid, ctrlAuth.register);

module.exports = routerAuth;