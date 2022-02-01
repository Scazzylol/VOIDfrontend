import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from 'styled-components'

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
		margin: "50px 20px",
		fontSize: "35pt",
		color: "white",
		fontFamily: "Mulish,sans-serif"
	},
	card: {
		background: "none",
		border: "1px solid white"
	},
	cardContent: {
		color: "white",
		fontFamily: "Mulish,sans-serif",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center"
	},
	claim_text: {
		color: "rgb(255, 165, 0)"
	},
});

const Highlighted = styled.span`
    color: rgb(255, 165, 0)
`

const ClaimButton = styled(Button)`
	background-color: rgb(255, 165, 0) !important;
	padding: 10px 45px !important;
	color: black !important;
	font-weight: bold !important;
	font-size: 15px !important;
`

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
		await dividenInstance.methods.claimDividend().send({ from: myAddress });
	}

	return (
		<div className={classes.root}>
			<div className={classes.title}>
				Void Dashboard
			</div>
			<Card className={classes.card}>
				<div className={classes.card}>
					<CardContent className={classes.cardContent}>
						<Typography gutterBottom variant="headline" component="h2" mx={5}>
							Pending <Highlighted>DAI</Highlighted> Token Rewards
						</Typography>
						<Typography className={classes.claim_text} component="p" my={1}>
							{reward && reward} DAI
						</Typography>
						<ClaimButton variant="contained" onClick={handleClaim} className={classes.claim_btn}>
							Claim
						</ClaimButton>
					</CardContent>
				</div>
			</Card>
		</div>
	);
}

export default DashBoard;