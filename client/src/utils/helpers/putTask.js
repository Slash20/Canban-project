import axios from 'axios';
import { updateTaskPath } from '../constants';

const putTask = async ({ title, description, id }) => {
  console.log(title, description, id);
  await axios.patch(`${updateTaskPath}/${id}/`, { title, description });
};

export { putTask };
