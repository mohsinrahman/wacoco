
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function Howwework() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Card sx={{ maxWidth: 345, mr:5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="AI & AR"
        subheader="August 18, 2021"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://freerangestock.com/thumbnail/147800/information-technology-service-management-concept.jpg"
        alt="AI & AR"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Artificial Intelligence (AI) is not only ChatGPT or generative AI. 
        We are talking about the emulation of different aspects of human intelligence, 
        from perception and recognition, planning or problem solving.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
  
      </CardActions>
      
    </Card>

<Card sx={{ maxWidth: 345 }}>
<CardHeader
  avatar={
    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      M
    </Avatar>
  }
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title="Web Services"
  subheader="November 1, 2025"
/>
<CardMedia
  component="img"
  height="194"
  image="https://media.istockphoto.com/id/1622459027/photo/natural-language-processing.jpg?s=612x612&w=0&k=20&c=txrDZHJDQjJ_bj9OArDyElinbAMpyqGv2rcMgCh7r0M="
  alt="AI & AR"
/>
<CardContent>
  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
  Build, deploy, and manage powerful web apps. Jumpstart your app building. Get your web apps into users' 
  hands faster using .NET, Java, Node.js, PHP, and Python.
  </Typography>
</CardContent>
<CardActions disableSpacing>
  <IconButton aria-label="add to favorites">
    <FavoriteIcon />
  </IconButton>
  <IconButton aria-label="share">
    <ShareIcon />
  </IconButton>

</CardActions>

</Card>
</>
  );
}

