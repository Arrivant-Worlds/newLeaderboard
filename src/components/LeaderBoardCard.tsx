import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Link } from '@mui/material';
import {makeStyles} from '@mui/styles'




export default function LeaderCard(props:any) {
  const font = "Lato";

  const classes = useStyles();
  return (
    <>
    <Card  style = {{backgroundColor:"none"}}sx={{ borderRadius:'20px', maxWidth: 565, minWidth:350 }} className = {classes.root}>
      <CardActionArea href = "https://twitter.com/" className = {classes.root}>
        <CardMedia
          component="img"
          height="300"
          image="/images/example.png"
          className = {classes.root}
          alt=""
          
        />
        
      </CardActionArea>
 
    </Card>
      {props.isActive && 
      
        <Button  sx ={
          { hover: {
          "&:hover": {
            backgroundColor: 'whitesmoke'
          }
          }, 
          marginTop:'20px',
          width:'120px',
          height:'50px',
          color: 'black', 
          fontFamily:font,
          font:'caption',
          backgroundColor:'#E6B2B8',
          borderRadius:'40px'
          
          }} size="large" className = {classes.button} variant ="contained" href = "https://twitter.com/compose/tweet?text=@ProjectEluune Claiming my Hot Take.">
                Claim
              </Button>
        
        }  
        {!props.isActive && 
        
        <Button disabled sx ={{ hover: {
          "&:hover": {
            backgroundColor: 'whitesmoke'
          }
        }, color: 'whitesmoke', backgroundColor:'#E6B2B8'}} size="large" className = {classes.button} variant ="contained" href = "https://twitter.com/compose/tweet?text=@ProjectEluune Claiming my Hot Take.">
                Claimed
              </Button>
        
        }
        </>
  );
}

const useStyles = makeStyles({
  root: {
    backgroundColor: 'pink',
    
    
  },
  button:{
    backgroundColor:'#E6B2B8',
    color:'#E6B2B8'
  }
});