import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
const navItems = ['Company', 'How we work','Contact us', 'Follow us'];

export default function () {
  return (
    <>
         <AppBar component="footer" position="fixed" style={{background: '#000639'}} sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Box  sx={{ flexGrow: 1,  ml: 5,mt:5, pb:5, display: { xs: 'none', sm: 'block',textAlign: 'left' }}}>
          <Typography
            variant="h6"
            component="div"
          >
            WACOCO
          </Typography>
          <Typography component="p" style={{fontSize: '12px'}}>
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography component="p"  style={{fontSize: '12px'}}>
            consectetur adipisicing elit.
          </Typography>
          <Button variant="contained" sx={{background: '#ffffff', mt:2, color:"#000000"}}>Contact us</Button>
          </Box>
          <Box sx={{  display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button  key={item} sx={{ color: '#fff',textTransform: 'capitalize' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
