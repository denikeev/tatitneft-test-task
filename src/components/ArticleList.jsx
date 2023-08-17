import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ArticleActions from './ArticleActions.jsx';

const ArticleList = ({ props: { articles } }) => (
  <div className="articles">
    {articles.map((article) => (
      <Card className="articles__item" key={article.id}>
        <h2 className="articles__title">{article.title}</h2>
        <span className="badge text-bg-dark article__theme me-auto mb-2">{article.theme}</span>
        <span className="articles__text">{article.text}</span>
        <ArticleActions articleId={article.id} />
        <Link className="stretched-link" to={`/articles/${article.id}`} />
      </Card>
    ))}
  </div>
);

export default ArticleList;
