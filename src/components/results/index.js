import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Results = (props) => {
  let { data } = props;

  return (
    <> 
    <Box sx={{ width: '50%',  bgcolor: '#C9ADA7', margin: 'auto', display: 'flex' }}>
      <nav aria-label="main mailbox folders">
      <List>

        <ListItem>{data ? JSON.stringify(data, undefined, 2) : null}</ListItem>
      </List>

      </nav>
    </Box >
    </>
  );

}

export default Results;
