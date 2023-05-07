import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { BurgerContext } from '../../../contexts';

const OpenBurgerBtn = () => {
  const { openBurger } = useContext(BurgerContext);
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="open drawer"
      sx={{ mr: 2 }}
      onClick={openBurger}
    >
      <MenuIcon />
    </IconButton>
  );
};

export { OpenBurgerBtn };
