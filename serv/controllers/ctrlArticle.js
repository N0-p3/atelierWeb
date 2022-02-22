const Article = require('../schemas/article');
const mongoose = require('mongoose');

const createOneArticle = async (req, res) => {
    try {
        const newArticle = new Article({
            title: req.body.title,
            body: req.body.body,
            unixDate: req.body.unixDate,
            author: req.user._id
        });

        await Article.create(newArticle);

        res.sendStatus(204);
    } catch(e) {
        res.sendStatus(400);
    }
};

const readAllArticles = async (req, res) => {
    try {
        const articles = await Article.find();

        res.json(articles).status(200);
    } catch(e) {
        res.sendStatus(400);
    }
};

const readAllMyArticles = async (req, res) => {
    try {
        const myArticles = await Article.find({author: req.user._id}, {_id: 1, title: 1, body: 1, unixDate: 1, author: 1});

        console.log(myArticles);

        res.json(myArticles).status(200);
    } catch(e) {
        res.sendStatus(400);
    }
};

const readOneArticle = async (req, res) => {
    try {
        const id = mongoose.Types.ObjectId(req.params.id);
        Article.exists({_id: id}, async (err, doc) => {
            if (err || doc == null) {
                res.sendStatus(400);
            } else {
                const article = await Article.findOne({_id: id});
                res.json(article).status(200);
            }
        });
    } catch(e) {
        res.sendStatus(400);
    }
};

const updateOneArticle = async (req, res) => {
    try {
        let article = await Article.find({ _id: req.body._id });

        article.title = req.body.title;
        article.body = req.body.body;

        article.save();
        res.sendStatus(204);
    } catch(e) {
        res.sendStatus(400);
    }
};

const deleteOneArticle = async (req, res) => {
    try {
        await Article.deleteOne(req.body);

        res.sendStatus(204);
    } catch(e) {
        res.sendStatus(400);
    }
};

module.exports = {
    createOneArticle,
    readAllArticles,
    readAllMyArticles,
    readOneArticle,
    updateOneArticle,
    deleteOneArticle
};