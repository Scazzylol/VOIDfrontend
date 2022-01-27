import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Web3 from 'web3';
import { useSelector, useDispatch } from 'react-redux';
import {
	setMyAddress,
	setMyBalance
} from '../pages/mainSlice';

const MyWallet = () => {

	const dispatch = useDispatch();
	const account = useSelector((state) => state.main.myAddress);
	const balance = useSelector((state) => state.main.myBalance);

	if (typeof window.ethereum === 'undefined') {
	  console.log('MetaMask is not installed!');
	  return;
	} else if (window.ethereum.chainId !== '0x3') {
		const checkNetwork = async () => {
			await window.ethereum.request({
			  method: 'wallet_switchEthereumChain',
			  params: [{ chainId: '0x3' }],
			});
		};
		checkNetwork();
	}

	const web3 = new Web3(Web3.givenProvider);

	const getEth = (account) => {
		web3.eth.getBalance(account, function(err, result) {
		  if (err) {
		    console.log(err);
		  } else {
		    dispatch(setMyBalance(web3.utils.fromWei(result, "ether")));
		  }
		})

		setTimeout(() => getEth(account));
	}

	const handleConnectWallet = async () => {
		try {
		  // Request account access
		  await window.ethereum.enable();
		} catch(e) {
		  // User denied access
		  return false;
		}
		const accounts = await web3.eth.getAccounts();
		dispatch(setMyAddress(accounts[0]));

		setTimeout(() => getEth(accounts[0]));
  }

	const shortenAddress = (address) => {
		return address.substring(0, 7) + "..." + address.substring(address.length - 5)
	}

	return (
  	<Button 
  		variant="contained" 
  		onClick={handleConnectWallet}
  	>
  		{!account ?
  			"Connect to MetaMask"
			:
				shortenAddress(account)
			}
  	</Button>
  )
}

export default MyWallet;