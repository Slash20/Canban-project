import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

import { useContext, useState } from 'react';
import { PopupContext } from '../../contexts';
import { updateTask } from '../../store/slices/kanbanSlice';
import { useDispatch } from 'react-redux';

const UpdateTaskPopup = (props) => {
  const dispatch = useDispatch();
  const { index, boardIndex } = props;
  const { closePopup } = useContext(PopupContext);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  const onClickHeandler = async () => {
    dispatch(updateTask({ index, boardIndex, title, description }));
    closePopup();
  };

  return (
    <>
      <DialogTitle>Изменить задачу</DialogTitle>
      <DialogContent>
        <DialogContentText>Измените имя и описание задачи</DialogContentText>
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

export { UpdateTaskPopup };
