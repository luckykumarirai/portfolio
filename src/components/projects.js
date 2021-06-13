import React from 'react';
import { makeStyles,Paper,Typography, Grid } from '@material-ui/core';


export default function Project() {
  const classes = useStyles();
  return (
  	<>
  	<Grid container spacing={3} className={classes.containergrid} >
      <Grid xs={12} sm={6}>
      <Typography variant="h4">Projects</Typography>
        <Paper style={{padding:"3%"}}>
        <Typography variant="h4">Projects</Typography>



        </Paper>
      </Grid>
      <Grid xs={12} sm={6}>
        <Paper style={{padding:"3%"}}>
        <Typography variant="h4">Projects</Typography>



        </Paper>
      </Grid>
      <Grid xs={12} sm={6}>
        <Paper style={{padding:"3%"}}>
        <Typography variant="h4">Projects</Typography>



        </Paper>
      </Grid>
      <Grid xs={12} sm={6}>
        <Paper style={{padding:"3%"}}>
        <Typography variant="h4">Projects</Typography>



        </Paper>
      </Grid>
	 </Grid>
	</>
  );
}

const useStyles = makeStyles((theme) => ({
  containergrid: {
  	padding: '3%',
    display: "flex",
    flexDirection: "row",
  },
  cardheader:{
  	padding: '3%',
  	background: 'linear-gradient(45deg, #ff00cc, #3e1ae6)',
  	color: 'white',
  	fontWeight: 900,
  },
  cardsubheader:{
  	fontWeight: 900,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  introduction: {
  	marginTop: '2%',
  },
  name: {
  	color: '#204a87',
  },
  skill: {
  	margin: '1%',
  },
  formcard: {
  	padding: '3%',
  }
}));