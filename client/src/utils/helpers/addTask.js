import axios from 'axios';
import { tasksPath } from '../constants';

const addTask = async (task) => {
  console.log(task);
  const data = await axios.post(tasksPath, task);
  return data;
};

export { addTask };
