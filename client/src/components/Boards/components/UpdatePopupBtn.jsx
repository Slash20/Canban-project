import { IconButton } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useContext } from 'react';
import { PopupContext } from '../../../contexts';
import { UpdateTaskPopup } from '../../Popup';

const UpdatePopupBtn = (props) => {
  const { setPopup } = useContext(PopupContext);
  const onClickHeandler = () => {
    setPopup(<UpdateTaskPopup {...props} />);
  };

  return (
    <IconButton
      sx={{
        transition: '.2s',
        opacity: props.vis,
      }}
      onClick={onClickHeandler}
      aria-label="Редактировать задачу"
    >
      <BorderColorIcon
        sx={{
          width: '20px',
        }}
      />
    </IconButton>
  );
};

export { UpdatePopupBtn };
