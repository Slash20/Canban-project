import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { kanbanReducer } from './slices/kanbanSlice';
import { searchReducer } from './slices/searchSlice';

const rootReducer = combineReducers({
  kanban: kanbanReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
