import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import reducers from './reducers';

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers,
});

const kanbanReducer = kanbanSlice.reducer;

const { setBoards } = kanbanSlice.actions;

export { kanbanReducer, setBoards };
