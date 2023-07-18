import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  bookList: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  add: (action, state) => {
    state.bookList.push({
      title: action.payload.title,
      author: action.payload.author,
      id: uuidv4(),
    });
  },
  remove(state, action) {
    return {
      ...state,
      booklist: state.booklist.filter((books) => books.id !== action.payload.books.id),
    };
  },
});
export const { add, remove } = booksSlice.actions;
export default booksSlice.reducer;
