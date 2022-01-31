import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import MyWallet from '../../components/MyWallet';
import './header.css';

import {
	HeaderContainer,
	LogoContainer,
	LogoLink,
	Logo,
	NavBar,
	NavLink,
	ExternalLink,
	WallertWrapper,
	WalletAmount,
	MainContainer
} from './styled'


const HeaderLayout = () => {
	const balance = useSelector((state) => state.main.myBalance);
	const pathname = useLocation();

	return (
		<HeaderContainer>
			<MainContainer>
				<LogoContainer>
					<LogoLink href='/'>
						<Logo src='/img/logos/logo.png' />
					</LogoLink>
				</LogoContainer>
				<NavBar>
					<NavLink to='/buy' >Buy</NavLink>
					<NavLink to='/chart'>Chart</NavLink>
					<NavLink to='/rewards'>Rewards</NavLink>
					<ExternalLink href='https://discord.gg/dDvATUcM' target="_blank">Discord</ExternalLink>
				</NavBar>
			</MainContainer>

			<WallertWrapper>
				<WalletAmount>{balance > 0 ? `${balance}` : '0.000'} VOID</WalletAmount>
				<MyWallet />
			</WallertWrapper>
		</HeaderContainer >
	);
}

export default HeaderLayout;