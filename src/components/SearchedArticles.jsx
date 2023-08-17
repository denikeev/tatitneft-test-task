import React from 'react';
import ArticleList from './ArticleList.jsx';

const isWordIntersection = (firstSentence, secondSentence) => firstSentence.split(' ').some((word) => secondSentence.includes(word));

const renderNothingFound = (resetSearch) => (
  <div className="not-found">
    <span>По вашему запросу ничего не найдено.</span>
    <br />
    <button onClick={() => resetSearch('')} className="btn btn-link" type="button" size="sm">Сброcить поиск</button>
  </div>
);

const SearchedArticles = ({ articles, searchQuery, resetSearch }) => {
  const normalizedSearchQuery = searchQuery.toLowerCase();

  const filteredArticles = articles
    .map((article) => ({
      ...article,
      title: article.title.toLowerCase(),
      theme: article.theme.toLowerCase(),
    }))
    .filter(({ title, theme }) => isWordIntersection(normalizedSearchQuery, title)
      || isWordIntersection(normalizedSearchQuery, theme))
    .map(({ id }) => id);

  const searchedArticles = articles.filter((article) => filteredArticles.includes(article.id));

  return (searchedArticles.length === 0)
    ? renderNothingFound(resetSearch) : <ArticleList props={{ articles: searchedArticles }} />;
};

export default SearchedArticles;
