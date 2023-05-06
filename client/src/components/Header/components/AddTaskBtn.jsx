import { Button } from '@mui/material';
import { useContext } from 'react';
import { PopupContext } from '../../../contexts';
import { AddTaskPopup } from '../../Popup';

const AddTaskBtn = ({ children }) => {
  const { setPopup } = useContext(PopupContext);

  const onClickHeandler = () => {
    setPopup(<AddTaskPopup />);
  };

  return (
    <Button
      onClick={onClickHeandler}
      variant="contained"
      sx={{
        background: '#1550bc',
      }}
    >
      {children}
    </Button>
  );
};

export { AddTaskBtn };
