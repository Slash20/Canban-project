import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useContext } from 'react';
import { PopupContext } from '../../../contexts';
import { DeleteTaskPopup } from '../../Popup/DeleteTaskPopup';

const DeletepopupBtn = (props) => {
  const { setPopup } = useContext(PopupContext);
  const onClickHeandler = () => {
    setPopup(<DeleteTaskPopup {...props} />);
  };

  return (
    <IconButton
      sx={{
        transition: '.2s',
        opacity: props.vis,
      }}
      onClick={onClickHeandler}
      aria-label="Удалить задачу"
    >
      <ClearIcon
        sx={{
          width: '20px',
        }}
      />
    </IconButton>
  );
};

export { DeletepopupBtn };
