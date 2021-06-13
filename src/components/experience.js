import React from 'react';
import { makeStyles, Card,Link, CardContent, CardActions, Collapse, Button, Typography, List, ListItem, ListItemText, Divider, Grid } from '@material-ui/core';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:"3%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Raleway, Arial',
    fontStyle: 'italic',
},
  button:{
    paddingRight :40,
  },
  image1:{
     padding:'8%'
  },
  containergrid: {
  	padding: '3%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  cardheader:{
  	padding: '3%',
  	background: ' #ff00cc',
  	color: 'white',
  	fontWeight: 900,
  },
  cardsubheader:{
  	fontWeight: 900,
    marginTop:"2%",
    marginLeft:"2%"
  },
}));
export default function Experience() {
  const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }
 
  return (
    <>
      <Grid container className={classes.root} direction="row" justify="flex-start" spacing={3}>
      <Grid item xs={12} sm={6}>
      <Typography variant="h4" style={{marginTop:"3%"}}>Experinces 🔥</Typography>
        <Card style={{marginTop:"10%",backgroundColor:"#e1bee7"}}>
						<Typography variant="h5" className={classes.cardheader}>
							Web Development Internship
						</Typography>
						<Typography variant="p" color="textSecondary" className={classes.cardsubheader}>
							Company: Analysed.in
						</Typography>
						&nbsp;&nbsp;&nbsp;&nbsp;
						<Typography variant="p" color="textSecondary" className={classes.cardsubheader}>
							Mar-2020 to May-2020
						</Typography>
            <CardContent>
						  	
              <Typography color="textSecondary">  ❄  Worked on development of user interface of Analysed platform.</Typography>
                  
              <Typography color="textSecondary"> ❄ Worked for Frontend functionlities using HTML, CSS, JavaScript, and Bootstrap.</Typography>
                  
              <Typography color="textSecondary"> ❄ Worked for Backend and Database functionlities using PHP and MySQL.</Typography>
								
							</CardContent>
						<Divider/>
						<CardContent>
							<Button variant="outlined" color="secondary" className={classes.skill}>
								<img src="images/html5.png" alt="html" width="23" height="20" />&nbsp;HTML
							</Button>
							<Button variant="outlined" color="secondary" className={classes.skill}>
								<img src="images/js.png" alt="javascript" width="23" height="20" />&nbsp;JavaScript
							</Button>
							<Button variant="outlined" color="primary" className={classes.skill}>
								<img src="images/bootstrap1.png" alt="bootstrap1" width="20" height="20" />&nbsp;Bootstrap
							</Button>
							<Button variant="outlined" color="primary" className={classes.skill}>
								<img src="images/php.png" alt="php" width="25" height="20" />&nbsp;PHP
							</Button>
							<Button variant="outlined" color="primary" className={classes.skill}>
								<img src="images/mysql.png" alt="mysql" width="20" height="20" />&nbsp;MySQL
							</Button>
						</CardContent>
						<Divider/>
						<CardActions disableSpacing>
						  <Link href="" target="_blank">
                <Button variant="contained" color="primary" size="medium" startIcon={<VisibilityIcon/>}>
							  	Certificate
						  	</Button>
              </Link>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link href="https://analysed.in/" target="_blank">
                <Button variant="contained" color="secondary" size="medium" startIcon={<LanguageIcon/>}>
                  Website
                </Button>
              </Link>
						</CardActions>
					</Card>
        </Grid>

        <Grid item xs={12} sm={6}>
        <Card style={{marginTop:"2%",backgroundColor:"#e1bee7",marginTop:"20%"}}>
						<Typography variant="h5" className={classes.cardheader}>
							Backend Development Internship
						</Typography>
						<Typography variant="p" color="textSecondary" className={classes.cardsubheader}>
							Company: Ungrezi
						</Typography>
						&nbsp;&nbsp;&nbsp;&nbsp;
						<Typography variant="p" color="textSecondary" className={classes.cardsubheader}>
							May-2021 to June-2021
						</Typography>
            <CardContent>
						  	
              <Typography color="textSecondary">  ❄  Developing backend for a live course providing gamification based learning algorithm.</Typography>
                  
              <Typography color="textSecondary"> ❄ Worked for Frontend functionlities using React.</Typography>
                  
              <Typography color="textSecondary"> ❄ Worked for Backend and Database functionlities using Node.js and MongoDb.</Typography>
								
							</CardContent>
						<Divider/>
						<CardContent>
							<Button variant="outlined" color="primary" className={classes.skill}>
								<img src="images/react.png" alt="bootstrap1" width="20" height="20" />&nbsp;React
							</Button>
							<Button variant="outlined" color="primary" className={classes.skill}>
								<img src="images/node.png" alt="php" width="25" height="20" />&nbsp;Node.js
							</Button>
							<Button variant="outlined" color="primary" className={classes.skill}>
								<img src="images/mongodb.png" alt="mysql" width="20" height="20" />&nbsp;MongoDb
							</Button>
						</CardContent>
						<Divider/>
						<CardActions disableSpacing>
						  <Link href="" target="_blank">
                <Button variant="contained" color="primary" size="medium" startIcon={<VisibilityIcon/>}>
							  	Certificate
						  	</Button>
              </Link>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link href="https://ungrezi.com/" target="_blank">
                <Button variant="contained" color="secondary" size="medium" startIcon={<LanguageIcon/>}>
                  Website
                </Button>
              </Link>
						</CardActions>
					</Card>
        </Grid>
        </Grid>
   </>
  );
}
