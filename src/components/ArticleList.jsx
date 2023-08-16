import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import OverlayTooltip from './OverlayTooltip.jsx';
import { BsPencil, BsTrash } from 'react-icons/bs';
import { removeArticle } from '../slices/articlesSlice.js';

const ArticleList = ({ props: { articles } }) => {
  const dispatch = useDispatch();

  return (
    <div className="articles__list">
      {articles.map((article) => (
        <Card className="shadow-sm articles__item" key={article.id}>
          <h6>{article.title}</h6>
          <span className="articles__text">{article.text}</span>
          <div className="articles__actions">
            <OverlayTooltip text="Edit">
              <Button
                as={Link}
                to={`/articles/${article.id}/edit`}
                className="articles__action mb-2"
                variant="link"
                aria-label="edit"
              >
                <BsPencil className="text-secondary fs-5" />
              </Button>
            </OverlayTooltip>
            <OverlayTooltip text="Remove">
              <Button
                className="articles__action"
                variant="link"
                onClick={() => dispatch(removeArticle(article.id))}
                aria-label="remove"
              >
                <BsTrash className="text-secondary fs-5" />
              </Button>
            </OverlayTooltip>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ArticleList;
