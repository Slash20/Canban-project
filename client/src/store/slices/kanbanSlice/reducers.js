const reducers = {
  setBoards(state, action) {
    state.boards = action.payload;
  },

  moveTask(state, action) {
    const { startBoard, endBoard, startIndex, endIndex } = action.payload;

    const newBoards = state.boards.map((board) => ({
      ...board,
      tasks: board.tasks.map((task) => ({ ...task })),
    }));

    const dragElem = newBoards
      .find((board) => `${board.id}` === startBoard)
      .tasks.splice(startIndex, 1)[0];

    dragElem.board = endBoard;
    dragElem.position = endIndex + 1;

    newBoards
      .find((board) => `${board.id}` === endBoard)
      .tasks.splice(endIndex, 0, dragElem);

    state.boards = newBoards;
  },
};

export default reducers;
