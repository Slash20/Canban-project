import axios from 'axios';
import { removeTaskPath } from '../constants';

const removeTask = async (id) => {
  await axios.delete(`${removeTaskPath}/${id}/`);
};

export { removeTask };
