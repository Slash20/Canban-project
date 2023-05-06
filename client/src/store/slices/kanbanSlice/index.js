import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import reducers from './reducers';

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers,
});

const kanbanReducer = kanbanSlice.reducer;

const { setBoards, moveTask, clearLastBoard, addTaskToFirstBoard } =
  kanbanSlice.actions;

export {
  kanbanReducer,
  setBoards,
  moveTask,
  clearLastBoard,
  addTaskToFirstBoard,
};
