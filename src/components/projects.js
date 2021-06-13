import React from 'react';
import { makeStyles, Card,Paper, CardContent, CardActions, Collapse, Button, Typography, List, ListItem, ListItemText, Divider, Grid } from '@material-ui/core';
import clsx from 'clsx';
import GitHub from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';

export default function Project() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

	const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  
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