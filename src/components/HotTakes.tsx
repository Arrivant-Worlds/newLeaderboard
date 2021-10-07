import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Container } from '@mui/material';
import {makeStyles} from '@mui/styles'




export default function HotTakes(props:any) {
  const classes = useStyles();
  const font = 'Lato';
  return (
    <Container className = {classes.root} style = {{fontFamily:font}}>
        <Typography gutterBottom =  {true} className = {classes.title1} align = "center" variant = "h2" color = "white">Project Eluune</Typography>
        <Typography className = {classes.title2} variant = "h4" color = "white">Decoders Leaderboard</Typography>
        <Button color = "secondary" className = {classes.button} variant ="outlined">CLAIM</Button>
    </Container>
  );
}

const useStyles = makeStyles({
  root: {
    paddingTop:'150px',
    
    
    height:'100vh',
    fontFamily:'fantasy'
    
    
    
  },
  title1:{
    padding:'20px',
    color:'whitesmoke',
    fontFamily:'Lato',
    

  },
  title2:{
    padding:'10px'
  },
  button:{

    backgroundColor:'#E6B2B8',



  }
 
});


