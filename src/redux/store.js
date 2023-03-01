import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/bookSlice';
import categoryReducer from './categories/categorySlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoryReducer,
  },
});

export default store;
