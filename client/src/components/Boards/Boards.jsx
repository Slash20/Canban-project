import { DragDropContext } from 'react-beautiful-dnd';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useSelector } from 'react-redux';
import { Board } from './components';

const Boards = () => {
  const boards = useSelector((state) => state.kanban.boards);
  return (
    <DragDropContext>
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={2} columns={24}>
          {boards.map((board) => (
            <Board {...board} key={board.id} />
          ))}
        </Grid>
      </Box>
    </DragDropContext>
  );
};

export { Boards };
