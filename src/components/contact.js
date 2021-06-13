 
import React from 'react';
import { makeStyles, Typography,Avtar, Button, Grid, IconButton, TextField, Card, Avatar } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function Contact() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} className={classes.containergrid} alignItems="center" justify="center">
		    <Grid item xs={12} sm={6}>
		      <Avatar src="images/lucky.jpg" alt="address" style={{width:"50%", height:"50%",marginLeft:"20%"}} />
		    </Grid>
		    <Grid item xs={12} sm={6}>
					<Card className={classes.formcard}>
						<Typography variant="h4">Reach Out to me!</Typography>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">I am available here. You can message me!</Typography>
						<IconButton aria-label="facebook" color="primary">
							<Facebook className={classes.socialicon} color="primary"/>
						</IconButton>
						<IconButton aria-label="facebook" color="secondary">
							<Instagram className={classes.socialicon}/>
						</IconButton>
						<IconButton aria-label="github">
							<GitHub className={classes.socialicon}/>
						</IconButton>
						<IconButton aria-label="linkedin" color="primary">
							<LinkedIn className={classes.socialicon} />
						</IconButton>
						<br/>
						<Typography variant="h6" className={classes.name}>
				    	<u>Home Address</u>
						</Typography>
						<Typography variant="h6" className={classes.introduction} color="textSecondary">
				    	<i>Buxar,Bihar India, Pin Code: 332406</i>
						</Typography>
						<br/>
						<Button variant="contained" color="primary" size="large" startIcon={<VisibilityIcon/>}>
							See My Resume
						</Button>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<Button variant="contained" color="secondary" size="large" startIcon={<MyLocationIcon/>}>
							View on Google Map
						</Button>
					</Card>
		    </Grid>
		  </Grid>
		  <Grid container spacing={3} className={classes.containergrid} alignItems="center" justify="center">
			  <Grid xs={12} sm={12} >
			  <Typography variant="h6" style={{color:"gray",marginLeft:"40%",marginTop:"10%"}} ><i>Made with ❤️ by Lucky</i></Typography>
			  </Grid>
		</Grid>

    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  containergrid: {
  	paddingLeft: '3%',
  	paddingRight: '3%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  introduction: {
  	marginTop: '2%',
  },
  socialicon: {
  	fontSize: 40,
  },
  What: {
  	
  },
  skill: {
  	margin: '1%',
  },
  formcard: {
  	padding: '3%',
  },
  formfields: {
  	width: '100%',
  }
}));