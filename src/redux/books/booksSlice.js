import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const initialState = {
  bookList: [],
};

export const getBooksFromApi = createAsyncThunk(
  'books/fetch books',
  async () => {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UDaNssZdUf6duW6ogyFa/books');
    return response.data;
  },
);

export const displayNewBook = createAsyncThunk(
  'books/ add new book',
  async (data) => {
    const bookDetails = data;
    bookDetails.item_id = uuidv4();
    bookDetails.category = 'action';
    const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UDaNssZdUf6duW6ogyFa/books', bookDetails);
    return response.data;
  },
);

export const removeBook = createAsyncThunk(
  'books/ delete book from api',
  async (id) => {
    const bookDetails = {};
    bookDetails.item_id = id;
    bookDetails.category = 'action';
    const response = await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UDaNssZdUf6duW6ogyFa/books/${id}`);
    return response.data;
  },
);

export const booksSlice = createSlice({
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
  extraReducers: (builder) => {
    builder.addCase(getBooksFromApi.fulfilled, (state, { payload }) => {
      const dataArray = [];
      Object.keys(payload).forEach((key) => {
        const properties = payload[key];
        const dataObject = {
          item_id: key,
          title: properties[0].title,
          author: properties[0].author,
          category: properties[0].category,
        };
        dataArray.push(dataObject);
      });
      return {
        ...state,
        bookList: dataArray,
      };
    }).addCase(displayNewBook.fulfilled, ({ payload }) => payload)
      .addCase(removeBook.fulfilled, ({ payload }) => payload);
  },
});
export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;
