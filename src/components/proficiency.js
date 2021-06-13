import React from 'react';
import {  makeStyles,withStyles} from '@material-ui/core/styles';
import {LinearProgress,Grid,Typography} from '@material-ui/core';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 20,
      borderRadius: 15,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 15,
      backgroundColor: '#9575cd',
    },
  }))(LinearProgress);
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      padding:"4%",
    },
  });
  

export default function ProgressBar() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root} direction="row" justify="flex-start">
        <Grid item xs={12} sm={12} className={classes.intro}>
        <Typography variant="h4" style={{marginTop:"3%"}}>Proficiency</Typography>
        <Typography style={{marginTop:"3%"}}>Frontend/Design</Typography>

        <BorderLinearProgress variant="determinate" value={90} />
        <Typography style={{marginTop:"3%"}}>Backend</Typography>

        <BorderLinearProgress variant="determinate" value={80} />
        <Typography style={{marginTop:"3%"}}>Programming</Typography>

        <BorderLinearProgress variant="determinate" value={70} />
        </Grid>
      </Grid>
   </>
  );
}
