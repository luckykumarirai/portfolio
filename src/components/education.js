import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:"3%"
  },
  image1:{
     padding:'5%'
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
      <Grid container className={classes.root} direction="row" justify="flex-start">
                    <Grid item xs={12} sm={6} >
                    <Typography variant="h4" >Education 🏫 </Typography>
                        <Paper>
                        <Typography variant="h6" style={{marginTop:'4%'}}>Indian Institute of Information Technology, Manipur</Typography>
                        
                        <Typography style={{color:'#90a4ae',}}>⚡ Bachelor of Technology</Typography>

                        <Typography  style={{color:'#90a4ae'}}>⚡ Computer Science and Engineering</Typography>
                        <Typography  style={{color:'#90a4ae'}}>⚡ CGPA - 8.4</Typography>
                        <Typography  style={{color:'#90a4ae'}}>⚡ 2018 - 2022</Typography>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img className={classes.image1} style={{height:'40%',width:'30%'}} alt="i am programmer" src="images/iiit.jpeg" />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Paper >
                        <Typography variant="h6" style={{marginTop:'4%'}}>Jawahar Navodaya Vidyalaya</Typography>
                        
                        <Typography style={{color:'#90a4ae',}}>⚡ Senior Secondary</Typography>

                        <Typography  style={{color:'#90a4ae'}}>⚡ 2015-2017</Typography>
                        <Typography  style={{color:'#90a4ae'}}>⚡ Marks-86%</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img className={classes.image1} style={{height:'40%',width:'20%'}} alt="i am programmer" src="images/jnv.jpeg" />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Paper >
                        <Typography variant="h6" style={{marginTop:'4%'}}>Jawahar Navodaya Vidyalaya</Typography>
                        
                        <Typography style={{color:'#90a4ae',}}>⚡ Senior Secondary</Typography>

                        <Typography  style={{color:'#90a4ae'}}>⚡ 2015-2017</Typography>
                        <Typography  style={{color:'#90a4ae'}}>⚡ Marks-86%</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img className={classes.image1} style={{height:'40%',width:'20%'}} alt="i am programmer" src="images/jnv.jpeg" />
                    </Grid>
                    
                    
                   
                
    </Grid> 
   </>
  );
}
