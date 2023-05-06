import { addTask } from '../../../utils/helpers/addTask';
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

    // const dragElem =
    //   .tasks.splice(startIndex, 1)[0];

    const board = newBoards.find((board) => `${board.id}` === startBoard);

    console.log(startIndex);

    console.log(board);

    console.log(board.tasks);

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
};

export default reducers;
