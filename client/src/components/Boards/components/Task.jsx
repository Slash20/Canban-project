import { ListItem, Typography } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';
import { Accordion } from './Accordion';
import { AccordionSummary } from './AccordionSummary';
import { AccordionDetails } from './AccordionDetails';

const Task = (props) => {
  const { index, id, title, description, expanded, setExpanded } = props;
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Draggable index={index} draggableId={`${id}`}>
      {(provided) => (
        <ListItem
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onDrag={() => console.log('dsad')}
        >
          <Accordion
            expanded={expanded === `panel${id}`}
            onChange={handleChange(`panel${id}`)}
          >
            <AccordionSummary
              aria-controls={`panel${id}d-content`}
              id={`panel${id}d-header`}
            >
              <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{description}</Typography>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      )}
    </Draggable>
  );
};

export { Task };
