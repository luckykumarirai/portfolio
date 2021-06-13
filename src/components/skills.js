import React from 'react';
import { makeStyles, Card, CardContent, Button, Typography, Divider, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:"3%",
  },
  image1:{
     padding:'8%'
  },
  skill: {
    margin: '1%',
}
}));

export default function Skills() {
  const classes = useStyles();
  return (
    <>
    <Grid id="skills" container className={classes.root} direction="row" justify="flex-start">
        <Grid item xs={12} sm={6}>
            <Typography variant="h4"style={{marginTop:'8%'}} >What I do</Typography>
            <Typography variant="h6" style={{marginTop:'4%',color:'#90a4ae'}}>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</Typography>
           <Typography style={{color:'#90a4ae',}}>⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications</Typography>
           <Card style={{marginTop:"2%"}}>
						<Typography variant="h5" className={classes.cardheader}>
							Frontend Skills
						</Typography>
						<Divider/>
						<CardContent>
							<Button variant="outlined" color="secondary" size="large" className={classes.skill}>
								<img src={process.env.PUBLIC_URL +"/images/html5.png"} alt="html" width="23" height="20" />&nbsp;HTML
							</Button>
							<Button variant="outlined" color="primary" size="large" className={classes.skill}>
								<img src={process.env.PUBLIC_URL +"/images/css3.png"} alt="css" width="20" height="20" />&nbsp;CSS
							</Button>
							<Button variant="outlined" color="secondary" size="large" className={classes.skill}>
								<img src={process.env.PUBLIC_URL +"/images/js.png"} alt="javascript" width="23" height="20" />&nbsp;JavaScript
							</Button>
							<Button variant="outlined" color="primary" size="large" className={classes.skill}>
								<img src={process.env.PUBLIC_URL +"/images/react.png"} alt="react" width="25" height="20" />&nbsp;React
							</Button>
							<Button variant="outlined" color="primary" size="large" className={classes.skill}>
								<img src={process.env.PUBLIC_URL +"/images/bootstrap1.png"} alt="bootstrap1" width="20" height="20" />&nbsp;Bootstrap
							</Button>
							<Button variant="outlined" color="primary" size="large" className={classes.skill}>
								<img src={process.env.PUBLIC_URL +"/images/matrialui.png"} alt="Matrialui" width="20" height="20" />&nbsp;Matrial-UI
							</Button>
							<Button variant="outlined" color="primary" size="large" className={classes.skill}>
								<img src={process.env.PUBLIC_URL +"/images/react.png"} alt="react" width="25" height="20" />&nbsp;React-Native
							</Button>
							<Button variant="outlined" color="primary" size="large" className={classes.skill}>
								<img src={process.env.PUBLIC_URL +"/images/reactnativepaper.jpeg"} alt="reactnativepaper" width="20" height="20" />&nbsp;React-Native-Paper
							</Button>
						</CardContent>
					</Card>
           <Card>
						<Typography variant="h5" className={classes.cardheader}>
							Backend and Database Skills
						</Typography>
						<Divider/>
						<CardContent>
							<Button variant="outlined" color="secondary" size="large" className={classes.skill}>
								<img src={process.env.PUBLIC_URL +"/images/node.png"} alt="node" width="20" height="20" />&nbsp;Node.js
							</Button>
							<Button variant="outlined" color="primary" size="large" className={classes.skill}>
								<img src={process.env.PUBLIC_URL +"/images/express.png"} alt="express" width="35" height="20" />Express
							</Button>
							<Button variant="outlined" color="primary" size="large" className={classes.skill}>
								<img src={process.env.PUBLIC_URL +"/images/php.png"} alt="php" width="25" height="20" />&nbsp;PHP
							</Button>
							<Button variant="outlined" color="secondary" size="large" className={classes.skill}>
								<img src={process.env.PUBLIC_URL +"/images/firebase.png"} alt="firebase" width="20" height="20" />&nbsp;Firebase
							</Button>
							<Button variant="outlined" color="primary" size="large" className={classes.skill}>
								<img src={process.env.PUBLIC_URL +"/images/mongodb.png"} alt="mongodb" width="25" height="20" />&nbsp;MongoDB
							</Button>
							<Button variant="outlined" color="primary" size="large" className={classes.skill}>
								<img src={process.env.PUBLIC_URL +"/images/mysql.png"} alt="mysql" width="20" height="20" />&nbsp;MySQL
							</Button>
							<Button variant="outlined" color="primary" size="large" className={classes.skill}>
								<img src={process.env.PUBLIC_URL +"/images/postgresql.png"} alt="postgresql" width="20" height="20" />&nbsp;PostgreSQL
							</Button>
						</CardContent>
					</Card>
        </Grid>
        <Grid item xs={12} sm={6}>
            <img className={classes.image1} style={{height:'90%',width:'90%'}} alt="i am programmer" src={process.env.PUBLIC_URL +"/images/1.gif"} />
        </Grid>
    </Grid>
    </>
);
}

        