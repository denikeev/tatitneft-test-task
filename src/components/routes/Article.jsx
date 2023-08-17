import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { BsCalendar3 } from 'react-icons/bs';
import CommentsBox from '../CommentsBox.jsx';
import { articlesSelector } from '../../slices/articlesSlice.js';

const formatDate = (date) => {
  const [year, day, month] = date.split('-');
  const dateString = new Date([year, month, day].join('-'));
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = dateString.toLocaleDateString('ru-RU', options);

  return formattedDate;
};

const Article = () => {
  const { id } = useParams();
  const article = useSelector((state) => articlesSelector.selectById(state, id));

  return (
    <Container className="my-3">
      <Row>
        <Col>
          <h1>{article.title}</h1>
          <span className="badge text-bg-info article__theme">{article.theme}</span>
          <p>{article.text}</p>
          <span className="text-secondary">{article.author}</span>
          <div className="article__date">
            <BsCalendar3 className="me-2" />
            {formatDate(article.date)}
          </div>
          <CommentsBox articleId={id} />
        </Col>
      </Row>
    </Container>
  );
};

export default Article;
