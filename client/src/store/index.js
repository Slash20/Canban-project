import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { kanbanReducer } from './slices/kanbanSlice';

const rootReducer = combineReducers({
  kanban: kanbanReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
