import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  classifications: [],
  status: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  checkStatus(state) {
    return {
      ...state,
      status: state.status === 'Under Construction' ? '' : 'Under Construction',
    };
  },
});
export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
