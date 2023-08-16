import { configureStore } from '@reduxjs/toolkit';

import articlesSlice from './articlesSlice.js';

export default configureStore({
  reducer: {
    articles: articlesSlice,
  },
});
