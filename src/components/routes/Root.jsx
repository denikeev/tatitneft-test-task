import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from 'react-bootstrap';
import { articlesSelector } from '../../slices/articlesSlice.js';
import ArticleList from '../ArticleList.jsx';
import SearchedArticles from '../SearchedArticles.jsx';
import urls from '../../urls.js';

const Root = () => {
  const articles = useSelector(articlesSelector.selectAll);
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState(null);

  const resetSearch = () => {
    setSearchInput('');
    setSearchQuery('');
  };

  return (
    <>
      <Row className="gy-3 mb-3 mb-lg-5">
        <Col className="order-lg-1" xs={12} lg={4}>
          <Button className="w-100" variant="primary" as={Link} to={urls.addNewArticle}>Добавить статью</Button>
        </Col>
        <Col className="d-flex" xs={12} lg={8}>
          <Form.Control onChange={(e) => setSearchInput(e.target.value)} value={searchInput} type="search" placeholder="Поиск..." />
          <Button className="ms-2" onClick={() => setSearchQuery(searchInput)} variant="outline-primary" type="button">Искать</Button>
        </Col>
      </Row>
      {searchQuery
        ? (
          <SearchedArticles
            articles={articles}
            searchQuery={searchQuery}
            resetSearch={resetSearch}
          />
        )
        : (<ArticleList props={{ articles }} />)}
    </>
  );
};

export default Root;
