import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import {
  Root,
  AddArticleForm,
  NoMatchPage,
} from './components/routes/reactRouters.js';
import store from './slices/index.js';
import { getArticles } from './slices/articlesSlice.js';
import articlesData from './articlesData.json';
import urls from './urls.js';

store.dispatch(getArticles(articlesData));

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path={urls.root} element={(<Root />)} />
        <Route path={urls.addNewArticle} element={(<AddArticleForm />)} />
        <Route path={urls.editArticle} element={(<AddArticleForm />)} />
        <Route path={urls.noMatch} element={<NoMatchPage />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
