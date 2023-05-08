import { Box, ListItem, Typography } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';
import { Accordion } from './Accordion';
import { AccordionSummary } from './AccordionSummary';
import { AccordionDetails } from './AccordionDetails';
import { UpdatePopupBtn } from './UpdatePopupBtn';
import { DeletepopupBtn } from './DeletePopupBtn';
import { useState } from 'react';

const Task = (props) => {
  const { index, boardIndex, id, title, description, expanded, setExpanded } =
    props;
  const [vis, setVis] = useState(0);
  const handleChange = (panel) => (e, newExpanded) => {
    if (e.target.closest('button')) return;
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Draggable index={index} draggableId={`${id}`}>
      {(provided) => (
        <ListItem
          onMouseOver={() => setVis(1)}
          onMouseOut={() => setVis(0)}
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
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography>
                  {title.length < 24 ? title : `${title.slice(0, 24)}...`}
                </Typography>
                <Box>
                  <UpdatePopupBtn
                    title={title}
                    description={description}
                    index={index}
                    id={id}
                    boardIndex={boardIndex}
                    vis={vis}
                  />
                  <DeletepopupBtn
                    index={index}
                    boardIndex={boardIndex}
                    id={id}
                    vis={vis}
                  />
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                overflow: 'hidden',
              }}
            >
              <Typography>{description}</Typography>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      )}
    </Draggable>
  );
};

export { Task };
