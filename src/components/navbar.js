
import React from 'react';
import { makeStyles, AppBar, Toolbar, Button,Link,Grid } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import HistoryIcon from '@material-ui/icons/History';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';

export default function Navbar() {
  const classes = useStyles();

  return (
	  <>
    <Grid container spacing={3}>
	    <AppBar position="static" color="link" className={classes.containergrid}>
	      <Toolbar align="center" className={classes.containergrid}>
          <Grid xs={12} sm={6} spacing={3}>
	        <Button color="primary" className={classes.buttons} startIcon={<HomeOutlinedIcon/>} href="/">Home</Button>
	        <Button color="primary" className={classes.buttons} startIcon={<BuildOutlinedIcon/>}>Skills</Button>
	        <Button color="primary" className={classes.buttons} startIcon={<MenuBookIcon/>} href="/educations">Education</Button>
          </Grid>
          <Grid xs={12} sm={6} spacing={3} >
	        <Button color="primary" className={classes.buttons} startIcon={<HistoryIcon/>} href="/experiences">Experience</Button>
	        <Button color="primary" className={classes.buttons} startIcon={<WorkOutlineOutlinedIcon/>} href="/projects">Projects</Button>
	        <Button color="primary" className={classes.buttons} startIcon={<ContactPhoneOutlinedIcon/>} href="/contactme">Contact Me</Button>
          </Grid>
	      </Toolbar>
	    </AppBar>
      </Grid>
	  </>
  );
}

const useStyles = makeStyles((theme) => ({
  buttons: {
    fontWeight: 900,
  },
  containergrid: {
    display: "flex",
    flexDirection: "row",
  },
}));