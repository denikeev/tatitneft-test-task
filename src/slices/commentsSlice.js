import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';

const commentsAdapter = createEntityAdapter();

const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsAdapter.getInitialState(),
  reducers: {
    addComment: (state, { payload }) => {
      commentsAdapter.addOne(state, { ...payload, id: uniqueId() });
    },
  },
});

export default commentsSlice.reducer;
export const { addComment } = commentsSlice.actions;
export const commentsSelector = commentsAdapter.getSelectors((state) => state.comments);
