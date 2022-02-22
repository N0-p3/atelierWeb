const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoStore = require('connect-mongo');

const User = require('./schemas/user');

const PORT = 3000;

passport.use(new localStrategy(
    (username, password, done) => {
        User.findOne({username: username}, (err, user) => {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }
));

passport.serializeUser((user, callback) => {
    callback(null, user._id);
});

passport.deserializeUser((id, callBack) => {
    User.findOne({_id: id}, (err, user) => {
        if (err) { return callBack(err); }
        callBack(null, user);
    })
});

const csurfFunc = (req, res, next) => {
    res.cookie('XSRF-TOKEN', req.csrfToken(), { httpOnly: false });
    next();
}

const sessionObj = { 
    secret: '^%*&^*&*){npi9ytvc&CUYRCu',
    resave: false, 
    saveUninitialized: true,
    store: mongoStore.create({ mongoUrl: 'mongodb://localhost/exemple', collection: 'sessions' })};

module.exports = {
    PORT,
    csurfFunc,
    sessionObj,
    passport
}