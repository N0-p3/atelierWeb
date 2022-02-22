const Joi = require('joi');

const articleIsValid = (req, res, next) => {
    const articleSchema = Joi.object({
        title: Joi.string().min(3).max(150).required(),
        body: Joi.string().min(3).max(100000).required(),
        unixDate: Joi.number()
    });

    const result = articleSchema.validate(req.body);

    if (result.error) {
        res.sendStatus(400);
    } else {
        next();
    }
};

module.exports = {
    articleIsValid
};