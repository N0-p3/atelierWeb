const Joi = require('joi');

const loginIsValid = (req, res, next) => {
    const userLoginSchema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string()
    }); 

    const result = userLoginSchema.validate(req.body);

    if (result.error) {
        res.sendStatus(400);
    } else {
        next();
    }
};

const registerIsValid = (req, res, next) => {
    const userRegisterSchema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        passwordRepeat: Joi.ref('password')
    });

    const result = userRegisterSchema.validate(req.body);

    if (result.error) {
        res.sendStatus(400);
    } else {
        next();
    }
};

const isAnon = (req, res, next) => {
    if (req.user) {
        res.sendStatus(403);
    } else {
        next();
    }
};

const isConnected = (req, res, next) => {
    if (!req.user) {
        res.sendStatus(403);
    } else {
        next();
    }
};

module.exports = {
    loginIsValid,
    registerIsValid,
    isAnon,
    isConnected
};