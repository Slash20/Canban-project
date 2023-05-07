import { removeTask } from '../../../utils/helpers/removeTask';

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

    const board = newBoards.find((board) => `${board.id}` === startBoard);

    const dragElem = board.tasks.splice(startIndex, 1)[0];

    dragElem.board = endBoard;
    dragElem.position = endIndex + 1;

    newBoards
      .find((board) => `${board.id}` === endBoard)
      .tasks.splice(endIndex, 0, dragElem);
    state.boards = newBoards;
  },

  clearLastBoard(state) {
    const len = state.boards.length - 1;

    state.boards[len].tasks.forEach((e) => {
      removeTask(e.id);
    });
    state.boards[len].tasks = [];
  },

  addTaskToFirstBoard(state, action) {
    const task = action.payload;
    const tasks = state.boards[0].tasks.map((e) => ({ ...e }));
    tasks.push(task);
    state.boards[0].tasks = tasks;
  },

  updateTask(state, action) {
    const { index, boardIndex, title, description } = action.payload;
    const task = {
      ...state.boards[boardIndex].tasks[index],
      title,
      description,
    };
    state.boards[boardIndex].tasks[index] = task;
  },

  deleteTask(state, action) {
    const { index, boardIndex } = action.payload;
    const tasks = state.boards[boardIndex].tasks.map((e) => ({ ...e }));
    tasks.splice(index, 1);
    state.boards[boardIndex].tasks = tasks;
  },
};

export default reducers;
