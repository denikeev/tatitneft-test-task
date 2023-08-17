import { configureStore } from '@reduxjs/toolkit';

import articlesSlice from './articlesSlice.js';
import commentsSlice from './commentsSlice.js';

export default configureStore({
  reducer: {
    articles: articlesSlice,
    comments: commentsSlice,
  },
});
