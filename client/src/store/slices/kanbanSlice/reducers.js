const reducers = {
  setBoards(state, action) {
    state.boards = action.payload;
  },
};

export default reducers;
