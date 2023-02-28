import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => ({ books: [...state.books, payload] }),
    removeBook: (state, { payload: bookId }) => {
      const filtered = state.books.filter((book) => book.id !== bookId);

      return ({ books: [...filtered] });
    },
  },
});

const { addBook, removeBook } = bookSlice.actions;
const booksReducer = bookSlice.reducer;

export { booksReducer, addBook, removeBook };
