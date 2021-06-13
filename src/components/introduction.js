import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link,Grid,Paper,Button,Avatar,Typography } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image1:{
     padding:'8%'
  },
  intro:{
    marginTop:'10%',
    padding:'3%'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <>
    <Grid container className={classes.root} direction="row" justify="flex-start">
        <Grid item xs={12} sm={6}>
          <img className={classes.image1} style={{height:'80%',width:'80%'}} alt="i am programmer" src="images/3.png" />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.intro}>
            <Typography variant="h3" style={{fontWeight:"bolder"}}>👋Hi all,I'm Lucky👧</Typography>
            <Paper><Typography variant="h5" style={{marginTop:'6%',color:'#90a4ae'}}>A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks..</Typography></Paper>
            <Grid xs={12} sm={3} style={{display:'flex'}}>
              <Grid  style={{display:'flex',marginTop:'10%'}}>
              <Link href="https://github.com/luckykumarirai" target="_blank"><Avatar style={{marginRight:10 }} alt="i am programmer" src="images/github.png" /></Link>
              <Link href="https://www.linkedin.com/in/luckykumarirai/" target="_blank"><Avatar style={{marginRight:10 }} alt="i am programmer" src="images/li.jpg" /></Link>
              <Link href="https://www.facebook.com/profile.php?id=100027989108049" target="_blank"><Avatar  style={{marginRight:10 }} alt="i am programmer" src="images/facebook.png" /></Link>
              <Link href="#" target="_blank"><Avatar  style={{marginRight:20 }}alt="i am programmer" src="images/telegram1.png" /></Link>
              </Grid>
              <Grid  style={{marginTop:'10%'}}>
              <Link href="https://drive.google.com/file/d/1jb9BDPr1EWxKcKj5GfdA4C7gUHdUQLxT/view?usp=sharing" target="_blank"><Button variant="contained" color="primary" size="large" startIcon={<VisibilityIcon/>}>Resume</Button></Link>
              </Grid>
            </Grid>
            
        </Grid>
    </Grid>
    </>
);
}

        