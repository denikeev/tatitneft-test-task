import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BsPencil, BsTrash } from 'react-icons/bs';
import OverlayTooltip from './OverlayTooltip.jsx';
import { removeArticle } from '../slices/articlesSlice.js';
import urls from '../urls.js';

const ArticleActions = ({ articleId, children }) => {
  const dispatch = useDispatch();

  return (
    <div className="articles__actions">
      {children}
      <OverlayTooltip text="Изменить статью">
        <Button
          as={Link}
          to={`/articles/${articleId}/edit`}
          className="articles__action"
          variant="link"
          aria-label="изменить статью"
        >
          <BsPencil className="text-secondary fs-5" />
        </Button>
      </OverlayTooltip>
      <OverlayTooltip text="Удалить статью">
        <Button
          className="articles__action"
          variant="link"
          onClick={() => dispatch(removeArticle(articleId))}
          as={Link}
          to={urls.root}
          aria-label="удалить статью"
        >
          <BsTrash className="text-secondary fs-5" />
        </Button>
      </OverlayTooltip>
    </div>
  );
};

export default ArticleActions;
