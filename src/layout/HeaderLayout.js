import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MyWallet from '../components/MyWallet';

const useStyles = makeStyles({
  root: {
	  backgroundColor: "#282c34",
	  minHeight: "10vh",
	  display: "flex",
	  flexDirection: "row",
	  alignItems: "center",
	  justifyContent: "space-between",
	  fontSize: `calc(10px + 2vmin)`,
	  color: "white",
  },
  navigator: {

  },
  right: {
	  display: "flex",
	  alignItems: "center",
  },
  walletButton: {
  	margin: "0 20px"
  }
});

const HeaderLayout = () => {
	const classes = useStyles();
	
	const dispatch = useDispatch();
	const balance = useSelector((state) => state.main.myBalance);

	return (
		<div className={classes.root}>
			<div className={classes.navigator}>
				<Typography variant="button" mx={2} gutterBottom>
	        Buy
	      </Typography>
				<Typography variant="button" mx={2} gutterBottom>
	        Dashboard
	      </Typography>
				<Typography variant="button" mx={2} gutterBottom>
	        Trade
	      </Typography>
				<Typography variant="button" mx={2} gutterBottom>
	        Earn
	      </Typography>
				<Typography variant="button" mx={2} gutterBottom>
	        Community
	      </Typography>
      </div>
      <div className={classes.right}>
				<Typography variant="h6" mx={2} gutterBottom component="span">
				{balance > 0 ?
					balance
				:
	        "0.000 VOID"
				}
	      </Typography>
	      <div className={classes.walletButton}>
	      	<MyWallet />
	      </div>
      </div>
		</div>
	);
}

export default HeaderLayout;