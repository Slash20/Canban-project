import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { PopupContext } from '../../contexts';
import { deleteTask } from '../../store/slices/kanbanSlice';
import { removeTask } from '../../utils/helpers/removeTask';

const DeleteTaskPopup = (props) => {
  const dispatch = useDispatch();
  const { index, boardIndex, id } = props;
  const { closePopup } = useContext(PopupContext);

  const handleClickOpen = () => {
    removeTask(id);
    dispatch(deleteTask({ index, boardIndex }));
    closePopup();
  };

  const handleClose = () => {
    closePopup();
  };

  return (
    <>
      <DialogTitle id="alert-dialog-title">Удалить задачу</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Вы уверены, что хотите удалить задачу? Это действие нельзя отменить!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={handleClickOpen} autoFocus>
          Удалить
        </Button>
      </DialogActions>
    </>
  );
};

export { DeleteTaskPopup };
