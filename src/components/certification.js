
 import React from 'react';
import { makeStyles, Typography, Grid, Card, Button } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function Certification() {
  const classes = useStyles();

  return (
    <div>
        <Typography style={{marginLeft:"3%"}} variant="h4" >Certification/Trainigns/Workshops</Typography>
    	<Grid container spacing={3} className={classes.containergrid} alignItems="center" justify="center">
	   <Grid item xs={12} sm={12}>
			<Grid container spacing={3} className={classes.containergrid}>
	  		<Grid item xs={12} sm={4} >
	  			<Card className={classes.card2}>
	                <img style={{marginLeft:"25%"}} src={process.env.PUBLIC_URL +"/images/internshala.jpg"} alt="internshala" width="200" height="150" />
					<Typography variant="h6" align="center">Machine Learning Training</Typography>
					<Typography variant="h6" color="textSecondary" align="center">Internshala</Typography>
                    <Button style={{marginLeft:"30%"}} variant="contained" color="Primary" size="medium" startIcon={<VisibilityIcon/>}>
                            Certificate
                    </Button>
	            </Card>
	      </Grid>
	      <Grid item xs={12} sm={4}>
	  			<Card className={classes.card2} style={{justifyContent:"center"}}>
                    <div style={{marginLeft:"25%"}}>
	                <img src={process.env.PUBLIC_URL +"/images/iitbombay.png"} alt="iitbombay" width="200" height="150" />
                    </div>
					<Typography variant="h6" align="center">Spoken Tutorial on Python</Typography>
					<Typography variant="h6" color="textSecondary" align="center">IIT Bombay</Typography>
		    	    <Button style={{marginLeft:"30%"}} variant="contained" color="primary" size="medium" startIcon={<VisibilityIcon/>}>
						Certificate
					</Button>
	            </Card>
	      </Grid>
	      <Grid item xs={12} sm={4}>
	  			<Card className={classes.card2}>
	                <img src={process.env.PUBLIC_URL +"/images/hackerrank.png"} alt="hackerrank" width="350" height="150" />
					<Typography variant="h6" align="center">C/C++ Hackerrank Certificate</Typography>
					<Typography variant="h6" color="textSecondary" align="center">Hackerrank</Typography>
		    	    <Button style={{marginLeft:"30%"}} variant="contained" color="primary" size="medium" startIcon={<VisibilityIcon/>}>
						Certificate
					</Button>
	            </Card>
	      </Grid>
	    </Grid>

	    <Grid container spacing={3} className={classes.containergrid}>
	  		<Grid item xs={12} sm={4}>
	  			<Card className={classes.card2}>
	                <img style={{marginLeft:"20%"}}src={process.env.PUBLIC_URL +"/images/iitbombay.png"} alt="iitbombay" width="150" height="150" />
					<Typography variant="h6" align="center">Spoken Tutorial on Latex</Typography>
					<Typography variant="h6" color="textSecondary" align="center">IIT Bombay</Typography>
		    	    <Button style={{marginLeft:"30%"}} variant="contained" color="primary" size="medium" startIcon={<VisibilityIcon/>}>
						Certificate
					</Button>
	            </Card>
	        </Grid>
            <Grid item xs={12} sm={4}>
                    <Card className={classes.card2}>
                        <img src={process.env.PUBLIC_URL +"/images/nptel.jpg"} alt="nptel" width="250" height="150" />
                        <Typography variant="h6" align="center">Introduction to Operating System</Typography>
                        <Typography variant="h6" color="textSecondary" align="center">NPTEL IIT Madras</Typography>
                        <Button style={{marginLeft:"30%"}} variant="contained" color="primary" size="medium" startIcon={<VisibilityIcon/>}>
                            Certificate
                        </Button>
                    </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
                    <Card className={classes.card2}>
                        <img src={process.env.PUBLIC_URL +"/images/linkedin.png"} alt="linkedin" width="300" height="150" />
                        <Typography variant="h6" align="center">Software Engineering Training</Typography>
                        <Typography variant="h6" color="textSecondary" align="center">Linkedin</Typography>
                        <Button style={{marginLeft:"30%"}} variant="contained" color="primary" size="medium" startIcon={<VisibilityIcon/>}>
                            Certificate
                        </Button>
                    </Card>
            </Grid>
	    </Grid>
    </Grid>
    </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  containergrid: {
  	padding:"3%",
    flexDirection: "row",
  },
  card1: {
  	width: '80%',
  	marginTop: '2%',
  	marginLeft: '10%',
  	padding: '1%',
  },
  card2: {
  	padding: '3%',
  },
  introduction: {
  	marginTop: '2%',
  },
  name: {
  	color: '#204a87',
  },
  formcard: {
  	padding: '3%',
  }
}));
