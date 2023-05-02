import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import reducers from './reducers';

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers,
});

const searchReducer = searchSlice.reducer;

const { setValue } = searchSlice.actions;

export { searchReducer, setValue };
