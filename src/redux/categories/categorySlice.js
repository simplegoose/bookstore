import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state, { payload }) => {
      const categories = payload === 'Under construction'
        ? 'Under construction'
        : state.categories;

      return ({ categories });
    },
  },
});

const categoryReducer = categorySlice.reducer;

const { checkStatus } = categorySlice.actions;

export { checkStatus };
export default categoryReducer;
