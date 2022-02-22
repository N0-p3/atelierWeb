const express = require('express');
const routerArticle = express.Router();

const ctrlArticle = require('../controllers/ctrlArticle');
const mdlArticle = require('../middlewares/mdlArticle');
const mdlAuth = require('../middlewares/mdlAuth');

routerArticle.route('/articles')
    .get(ctrlArticle.readAllArticles)
    .post(mdlArticle.articleIsValid, ctrlArticle.createOneArticle);

routerArticle.route('/articles/:id')
    .get(ctrlArticle.readOneArticle)
    .put(mdlArticle.articleIsValid, ctrlArticle.updateOneArticle)
    .delete(ctrlArticle.deleteOneArticle);

routerArticle.route('/myArticles')
    .get(ctrlArticle.readAllMyArticles);

module.exports = routerArticle;