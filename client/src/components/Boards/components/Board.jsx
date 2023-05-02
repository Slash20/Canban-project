import { Draggable, Droppable } from 'react-beautiful-dnd';
import Grid from '@mui/material/Unstable_Grid2';
import { List, ListItem } from '@mui/material';

const Board = (props) => {
  const { title, tasks, id } = props;
  return (
    <Grid xs={8}>
      <h3>{title}</h3>
      <Droppable droppableId={`${id}`}>
        {(provided) => (
          <List
            sx={{
              bgcolor: 'white',
              borderRadius: '10px',
              minHeight: '70px',
              padding: '10px',
            }}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, i) => (
              <Draggable index={i} key={task.id} draggableId={`${task.id}`}>
                {(provided) => (
                  <ListItem
                    sx={{
                      height: '50px',
                    }}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {task.title}
                  </ListItem>
                )}
              </Draggable>
            ))}
          </List>
        )}
      </Droppable>
    </Grid>
  );
};

export { Board };
