import { DragDropContext } from 'react-beautiful-dnd';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useDispatch, useSelector } from 'react-redux';
import { Board } from './components';
import { moveTask } from '../../store/slices/kanbanSlice';

const Boards = () => {
  const boards = useSelector((state) => state.kanban.boards);
  const dispatch = useDispatch();

  const handleOnDragEnd = async (e) => {
    if (!(e.source && e.destination)) return;

    const startBoard = e.source.droppableId;
    const endBoard = e.destination.droppableId;
    const startIndex = e.source.index;
    const endIndex = e.destination.index;

    dispatch(moveTask({ startBoard, endBoard, startIndex, endIndex }));
  };

  return (
    <DragDropContext onDragEnd={(e) => handleOnDragEnd(e)}>
      <Box sx={{ flexGrow: 1, padding: 3, marginTop: '24px' }}>
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
