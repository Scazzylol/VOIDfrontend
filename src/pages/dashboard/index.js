import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import web3 from '../../core/web3';
import { DIVIDEN_ABI } from '../../config/config';


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

	const myAddress = useSelector((state) => state.main.myAddress);
	const dividenAddress = useSelector((state) => state.main.dividenAddress);

	const [reward, setReward] = useState(0);

	useEffect(() => {
		const getMim = async () => {
			const dividenInstance = new web3.eth.Contract(DIVIDEN_ABI, dividenAddress);
			const val = await dividenInstance.methods.totalDividends().call();
			setReward(val);
		};
		if (dividenAddress) {
			getMim();
		}
	}, [dividenAddress])

	const handleClaim = async () => {
		if (dividenAddress === null) {
			alert("please connect wallet!!!");
			return
		}
		const dividenInstance = new web3.eth.Contract(DIVIDEN_ABI, dividenAddress);
		await dividenInstance.methods.claimDividend().send({from: myAddress});
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