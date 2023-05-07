import Drawer from '@mui/material/Drawer';
import { useContext } from 'react';
import { BurgerContext } from '../../contexts/BurgerContext';
import { Box, List, ListItem } from '@mui/material';

const Burger = () => {
  const { burger, closeBurger } = useContext(BurgerContext);
  return (
    <Drawer onClose={closeBurger} anchor="left" open={burger}>
      <Box>
        <List>
          <ListItem>Привет</ListItem>
          <ListItem>Пока</ListItem>
          <ListItem>Как дела</ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export { Burger };
