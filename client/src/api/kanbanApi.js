import { boardsPath, tasksPath } from '../utils/constants';
import { fetchData } from '../utils/helpers';

const kanbanApi = async () => {
  const boards = await fetchData(boardsPath);
  const tasks = await fetchData(tasksPath);

  const currentBoards = boards.map((e) => ({ ...e, tasks: [] }));

  tasks.forEach((task) => {
    const board = currentBoards.find((e) => e.id === task.board);
    board.tasks[task.position - 1] = task;
  });

  return currentBoards;
};

export { kanbanApi };
