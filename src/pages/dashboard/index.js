import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  root: {
	  display: "flex",
	  flexDirection: "column",
	  alignItems: "center",
	  justifyContent: "center",
  },
  title: {
  	margin: "50px",
  	fontSize: "50pt"
  },
  card: {
  	backgroundColor: "skyblue"
  },
  cardContent: {
  	display: "flex",
  	flexDirection: "column",
  	alignItems: "center",
  	justifyContent: "center"
  }
});

const DashBoard = () => {
	const classes = useStyles();

	const reward = useState(0);

	const handleClaim = () => {
		alert()
	}

	return (
		<div className={classes.root}>
			<div className={classes.title}>
				Void Dashboard
			</div>
			<Card>
				<div className={classes.card}>
		      <CardContent className={classes.cardContent}>
		        <Typography gutterBottom variant="headline" component="h2" mx={5}>
		          Pending MIM Token Rewards
		        </Typography>
		        <Typography component="p" my={1}>
		          {reward && reward} MIM
		        </Typography>
		        <Button
		        	variant="contained"
				  		onClick={handleClaim}
		        >
		        	Claim
		        </Button>
		      </CardContent>
		    </div>
	    </Card>
		</div>
	);
}

export default DashBoard;