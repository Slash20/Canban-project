import { Droppable } from 'react-beautiful-dnd';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Divider, List, Typography } from '@mui/material';
import { Task } from './Task';
import { useSelector } from 'react-redux';

const Board = (props) => {
  const { title, tasks, id } = props;
  const value = useSelector((state) => state.search.value);
  return (
    <Grid
      xs={8}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          background: 'rgba(13, 99, 156, 0.7)',
          padding: '10px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '10px 10px 0 0',
        }}
      >
        <Typography color="white" variant="h4" component="h4">
          {title}
        </Typography>
      </Box>

      <Droppable droppableId={`${id}`}>
        {(provided) => (
          <List
            sx={{
              minHeight: '70px',
              width: '100%',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: 'solid 1px rgba(13, 99, 156, 0.7)',
            }}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks
              .filter((e) =>
                e.title.toLowerCase().includes(value.toLowerCase())
              )
              .map((task, i) => (
                <>
                  <Task index={i} key={task.id} {...task} />
                  <Divider light />
                </>
              ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </Grid>
  );
};

export { Board };
