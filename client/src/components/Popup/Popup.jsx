import Dialog from '@mui/material/Dialog';

import { useContext } from 'react';
import { PopupContext } from '../../contexts';

const Popup = () => {
  const { popup, closePopup } = useContext(PopupContext);

  return (
    <Dialog open={Boolean(popup)} onClose={closePopup}>
      {popup}
    </Dialog>
  );
};

export { Popup };
