import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';

const articlesAdapter = createEntityAdapter();

const articlesSlice = createSlice({
  name: 'articles',
  initialState: articlesAdapter.getInitialState(),
  reducers: {
    addArticle: (state, { payload }) => {
      articlesAdapter.addOne(state, { ...payload, id: uniqueId() });
    },
    getArticles: (state, { payload }) => {
      const normalizedData = payload.map((v) => ({ ...v, id: uniqueId() }));
      articlesAdapter.addMany(state, normalizedData);
    },
    removeArticle: articlesAdapter.removeOne,
  },
});

export default articlesSlice.reducer;
export const { addArticle, getArticles, removeArticle } = articlesSlice.actions;
export const articlesSelector = articlesAdapter.getSelectors((state) => state.articles);
