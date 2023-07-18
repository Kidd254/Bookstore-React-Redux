import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import booksInitialState from '../../components/BooksLogic';

const initialState = {
  bookList: booksInitialState,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      state.bookList.push({
        title: action.payload.title,
        author: action.payload.author,
        id: uuidv4(),
      });
    },
    remove(state, action) {
      return {
        ...state,
        bookList: state.bookList.filter((books) => books.id !== action.payload.books.id),
      };
    },
  },
});
export const { add, remove } = booksSlice.actions;
export default booksSlice.reducer;
