import React from 'react';
import { Link } from 'react-router-dom';
import urls from '../../urls.js';

const NoMatchPage = () => (
  <div className="d-flex flex-column justify-content-center align-items-center vh-100">
    <span className="display-1">404</span>
    <h1 className="h4 text-muted">Страница не найдена</h1>
    <p className="text-muted">
      Перейти на
      {' '}
      <Link to={urls.root}>главную страницу</Link>
    </p>
  </div>
);

export default NoMatchPage;
