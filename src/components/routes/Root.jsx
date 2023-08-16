import React from 'react';
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
import urls from '../../urls.js';

const Root = () => {
  const articles = useSelector(articlesSelector.selectAll);

  return (
    <Container className="my-3">
      <h1>Articles</h1>
      <hr />
      <Row className="gy-3 mb-3">
        <Col className="order-lg-1" xs={12} lg={4}>
          <Button className="app__add-article" variant="primary" as={Link} to={urls.addNewArticle}>Добавить статью</Button>
        </Col>
        <Col xs={12} lg={8}>
          <Form.Control type="text" placeholder="Search..." />
        </Col>
      </Row>
      <ArticleList props={{ articles }} />
    </Container>
  );
};

export default Root;
