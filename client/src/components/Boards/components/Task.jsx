import { ListItem, Typography } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';

const Task = (props) => {
  const { index, id, title } = props;
  return (
    <Draggable index={index} draggableId={`${id}`}>
      {(provided) => (
        <ListItem
          sx={{
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Typography fontSize={20} color="black">
            {title}
          </Typography>
        </ListItem>
      )}
    </Draggable>
  );
};

export { Task };
