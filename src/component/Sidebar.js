import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LoopIcon from '@mui/icons-material/Loop';
import SupportIcon from '@mui/icons-material/Support';
import AddIcon from '@mui/icons-material/Add';

const Sidebar = () => {
  return (
    <List component="nav" sx={{ width: 200, bgcolor: '#FFA726', height: '100vh' }}>
       <ListItem button component={Link} to="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/order">
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Order" />
      </ListItem>
      <ListItem button component={Link} to="/items">
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Item" />
      </ListItem>
      <ListItem button component={Link} to="/analytics">
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Analytics" />
      </ListItem>
      <ListItem button component={Link} to="/return">
        <ListItemIcon>
          <LoopIcon />
        </ListItemIcon>
        <ListItemText primary="Return" />
      </ListItem>
      
    </List>
  );
};

export default Sidebar;
