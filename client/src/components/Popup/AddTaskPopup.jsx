import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PopupContext } from '../../contexts';
import { addTaskToFirstBoard } from '../../store/slices/kanbanSlice';
import { addTask } from '../../utils/helpers/addTask';

const AddTaskPopup = () => {
  const { closePopup } = useContext(PopupContext);
  const { boards } = useSelector((state) => state.kanban);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onClickHeandler = async () => {
    const response = await addTask({
      title,
      description,
      id: Math.random(),
      board: boards[0].id,
    });
    console.log(response.data);
    dispatch(addTaskToFirstBoard(response.data));
    closePopup();
  };

  return (
    <>
      <DialogTitle>Добавить задачу</DialogTitle>
      <DialogContent>
        <DialogContentText>Введите имя и описание задачи</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Имя"
          type="title"
          fullWidth
          variant="standard"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          id="descript"
          label="Описание"
          type="descript"
          fullWidth
          variant="standard"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closePopup}>Закрыть</Button>
        <Button onClick={onClickHeandler}>добавить</Button>
      </DialogActions>
    </>
  );
};

export { AddTaskPopup };
