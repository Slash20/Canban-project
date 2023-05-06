import { boardsPath, tasksPath } from '../utils/constants';
import { fetchData } from '../utils/helpers';

const kanbanApi = async () => {
  const boards = await fetchData(boardsPath);
  const tasks = await fetchData(tasksPath);

  const currentBoards = boards.map((e) => ({ ...e, tasks: [] }));

  // tasks.forEach((task) => {
  //   const board = currentBoards.find((e) => e.id === task.board);
  //   if (board === -1) return;
  //   board.tasks[task.position - 1] = task;
  // });

  tasks
    .sort((prev, next) => {
      if (prev.position > next.position) return 1;
      if (prev.position < next.position) return -1;
      return 0;
    })
    .forEach((task) => {
      const board = currentBoards.find((e) => e.id === task.board);
      if (board === -1) return;
      // board.tasks[task.position - 1] = task;
      board.tasks.push(task);
    });

  return currentBoards;
};

export { kanbanApi };
