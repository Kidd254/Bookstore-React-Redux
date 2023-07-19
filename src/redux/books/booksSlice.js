import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const initialState = {
  bookList: [],
};

const getBooksFromApi = createAsyncThunk(
  'books/fetch books',
  async () => {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UDaNssZdUf6duW6ogyFa/books');
    return response.data;
  },
);

const displayNewBook = createAsyncThunk(
  'books/ add new book',
  async (data) => {
    const bookDetails = data;
    bookDetails.item_id = uuidv4();
    bookDetails.category = 'action';
    const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UDaNssZdUf6duW6ogyFa/books', bookDetails);
    return response.data;
  },
);

const removeBook = createAsyncThunk(
  'books/ delete book from api',
  async (id) => {
    const bookDetails = {};
    bookDetails.item_id = id;
    bookDetails.category = 'action';
    const response = await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UDaNssZdUf6duW6ogyFa/books/${id}`);
    return response.data;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      state.bookList.push({
        title: action.payload.title,
        author: action.payload.author,
        item_id: uuidv4(),
      });
    },
    remove(state, action) {
      return {
        ...state,
        bookList: state.bookList.filter(
          (books) => books.item_id !== action.payload.bookData.item_id,
        ),
      };
    },
  },
});
