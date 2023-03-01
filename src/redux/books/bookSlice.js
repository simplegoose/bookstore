import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dgZMtKIOnFliL8i4yKuA';

const initialState = {
  books: [],
  pending: false,
  error: false,
};

export const getBooks = createAsyncThunk('books/getBooks', async (payload, thunkAPI) => {
  try {
    const res = await axios.get(`${baseURL}/books`, { });
    const { data } = res;

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addBook = createAsyncThunk('books/addBook', async (payload, thunkAPI) => {
  try {
    await axios.post(`${baseURL}/books`, { ...payload });
    thunkAPI.dispatch(getBooks());
    return payload;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (payload, thunkAPI) => {
  try {
    await axios.delete(`${baseURL}/books/${payload}`);
    thunkAPI.dispatch(getBooks());
    return payload;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addBook.pending, (state) => ({ ...state, pending: true }))
      .addCase(addBook.fulfilled,
        (state) => ({ ...state, pending: false }))
      .addCase(addBook.rejected, (state) => ({ ...state, error: true, pending: false }))
      .addCase(removeBook.pending, (state) => ({ ...state, pending: true }))
      .addCase(removeBook.fulfilled,
        (state) => ({ ...state, pending: false }))
      .addCase(removeBook.rejected, (state) => ({ ...state, error: true, pending: false }))
      .addCase(getBooks.pending, (state) => ({ ...state, pending: true }))
      .addCase(getBooks.fulfilled,
        (state, { payload }) => {
          const array = [];
          const entries = Object.entries(payload);
          entries.forEach((entry) => {
            array.push({ item_id: entry[0], ...entry[1][0], progress: '0%' });
          });

          return ({ ...state, pending: false, books: array });
        })
      .addCase(getBooks.rejected, (state) => ({ ...state, error: true, pending: false }));
  },
});

const booksReducer = bookSlice.reducer;

export default booksReducer;
