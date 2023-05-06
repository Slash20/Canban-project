import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PopupContext } from '../../contexts';
import { addTaskToFirstBoard } from '../../store/slices/kanbanSlice';

const AddTaskPopup = () => {
  const { closePopup } = useContext(PopupContext);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onClickHeandler = () => {
    dispatch(
      addTaskToFirstBoard({
        title,
        description,
      })
    );
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
