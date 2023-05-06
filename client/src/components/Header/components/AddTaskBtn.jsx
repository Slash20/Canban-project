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
      variant="text"
      sx={{
        // background: '#1550bc',
        color: 'white',
      }}
    >
      {children}
    </Button>
  );
};

export { AddTaskBtn };
