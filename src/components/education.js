import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:"3%"
  },
   image1:{
     marginLeft:"30%",
   },
  intro:{
    marginTop:'10%',
    padding:'3%'
  }
}));

export default function Education() {
  const classes = useStyles();
  return (
    <>
     <Typography variant="h4" style={{marginLeft:'3%'}}>Education 🏫 </Typography>
      <Grid container className={classes.root} direction="row" justify="flex-start">
               
                <Grid item xs={12} sm={6}>
                    <Card sx={{ maxWidth:445 }}>
                      <CardActionArea>
                      <CardHeader
                        style={{backgroundColor:"#6fdced"}}
                        title="Indian Institute of Information Technology"
                        subheader="Aug 2018 - July 2022"
                      />
                      <CardMedia>
                        <img 
                        style={{height:'40%',width:'40%'}}
                        className={classes.image1} 
                        alt="i am programmer" 
                        src={process.env.PUBLIC_URL +"/images/iiit.jpeg" }
                        />

                      </CardMedia>
                      <CardContent>
                        <Typography style={{color:'#90a4ae',}}>⚡ Bachelor of Technology</Typography>
                        <Typography  style={{color:'#90a4ae'}}>⚡ Computer Science and Engineering</Typography>
                        <Typography  style={{color:'#90a4ae'}}>⚡ CGPA - 8.4</Typography>
                      </CardContent>
                      </CardActionArea>
                    </Card>
                </Grid>    
                <Grid item xs={12} sm={6}>
                  <Card sx={{ maxWidth: 445 }}>
                    <CardActionArea>
                    <CardHeader
                      style={{backgroundColor:"#6fdced"}}
                      title="Jawahar Navodaya Vidyalaya"
                      subheader="May 2015 - July 2017"
                    />
                    <CardMedia>
                      <img 
                      style={{height:'5%',width:'30%',marginTop:'2%'}}
                      className={classes.image1} 
                      alt="i am programmer" 
                      src={process.env.PUBLIC_URL +"/images/jnv.jpeg" }
                      />
                    </CardMedia>
                    <CardContent>
                      <Typography style={{color:'#90a4ae',}}>⚡Higher Secondary & Secondary</Typography>
                      <Typography style={{color:'#90a4ae'}}>⚡HSS -86%</Typography>
                      <Typography style={{color:'#90a4ae'}}>⚡SSC -9.8/10</Typography>
                    </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>         
    </Grid> 
   </>
  );
}
