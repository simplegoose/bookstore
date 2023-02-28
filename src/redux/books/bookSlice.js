import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      progress: '2%',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      progress: '75%',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Non-fiction',
      progress: '30%',
    },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => ({ books: [...state.books, payload] }),
    removeBook: (state, { payload: bookId }) => {
      const filtered = state.books.filter((book) => book.item_id !== bookId);

      return ({ books: [...filtered] });
    },
  },
});

const { addBook, removeBook } = bookSlice.actions;
const booksReducer = bookSlice.reducer;

export { addBook, removeBook };
export default booksReducer;
