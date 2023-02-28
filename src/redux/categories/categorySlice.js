import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: () => ({ categories: 'Under construction' }),
  },
});

const categoryReducer = categorySlice.reducer;

const { checkStatus } = categorySlice.actions;

export { checkStatus };
export default categoryReducer;
