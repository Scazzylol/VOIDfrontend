import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import {
	setMyAddress,
	setDividenAddress,
	setMyBalance
} from '../pages/mainSlice';

import web3 from '../core/web3';
import voidInstance from '../core/voidInstance';
import { CHAIN_ID } from '../config/config';
import styled from 'styled-components'

const WalletButton = styled(Button)`
	background-color: rgb(37, 150, 190) !important;
	font-family: Mulish, sans-serif !important;
`

const MyWallet = () => {

	const dispatch = useDispatch();
	const account = useSelector((state) => state.main.myAddress);

	if (typeof window.ethereum === 'undefined') {
		console.log('MetaMask is not installed!');
		return;
	} else if (window.ethereum.chainId !== CHAIN_ID) {
		const checkNetwork = async () => {
			await window.ethereum.request({
				method: 'wallet_switchEthereumChain',
				params: [{ chainId: CHAIN_ID }],
			});
		};
		checkNetwork();
	}

	const getBalance = async (account) => {
		const val = await voidInstance.methods.balanceOf(account).call();

		dispatch(setMyBalance(web3.utils.fromWei(val, "gwei")));

		setTimeout(() => getBalance(account));
	}

	const handleConnectWallet = async () => {
		try {
			// Request account access
			await window.ethereum.enable();
		} catch (e) {
			// User denied access
			return false;
		}
		const accounts = await web3.eth.getAccounts();
		dispatch(setMyAddress(accounts[0]));

		const dividenAddress = await voidInstance.methods.distributorAddress().call();
		dispatch(setDividenAddress(dividenAddress));

		setTimeout(() => getBalance(accounts[0]));
	}

	const shortenAddress = (address) => {
		return address.substring(0, 7) + "..." + address.substring(address.length - 5)
	}

	return (
		<WalletButton variant="contained" onClick={handleConnectWallet}>
			{account ? shortenAddress(account) : "Connect to MetaMask"}
		</WalletButton>
	)
}

export default MyWallet;