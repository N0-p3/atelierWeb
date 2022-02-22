const express = require('express');
const mongoose = require('mongoose');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const conf = require('./config');

const routerAuth = require('./routers/routerAuth');
const routerArticle = require('./routers/routerArticle')

const app = express();

mongoose.connect('mongodb://localhost/atelier1');

app.use(express.json());
app.use(cookieParser());
app.use(csurf({ cookie: true }), conf.csurfFunc);
app.use(session(conf.sessionObj));
app.use(conf.passport.initialize());
app.use(conf.passport.session());
app.use(routerAuth);
app.use(routerArticle);

app.listen(conf.PORT);