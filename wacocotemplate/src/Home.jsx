import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
//import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
const navItems = ['About us', 'Our approach','Services', 'How we work', 'Career'];
//const joinedNavItems = navItems.map(item => item.split(' ').join(''));

function Home() {
  return (
    
  
      <Box component="main" sx={{ p: 3}}>
        <Typography>
          <h2>Welcome to WACOCO!</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
          oluptates recusandae. Vel dolor nobis eius, ratione atque
          res sunt inventore perferendis, aut sapiente modi nesciunt.
        </Typography>
      </Box>
      
 
    
    
    
  );
}



export default Home;