import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { AddTaskBtn, OpenBurgerBtn, SearchInput } from './components';

const Header = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <OpenBurgerBtn />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {children}
          </Typography>
          <AddTaskBtn>Добавить</AddTaskBtn>
          <SearchInput />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Header };
