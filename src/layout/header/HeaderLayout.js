import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MyWallet from '../../components/MyWallet';
import {
	HeaderContainer,
	LogoContainer,
	LogoLink,
	Logo,
	NavBar,
	NavLink,
	WallertWrapper,
	WalletAmount,
	MainContainer
} from './styled'

const useStyles = makeStyles({
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

	const balance = useSelector((state) => state.main.myBalance);

	return (
		<HeaderContainer>
			<MainContainer>
				<LogoContainer>
					<LogoLink href='/'>
						<Logo src='/img/logos/logo.png' />
					</LogoLink>
				</LogoContainer>
				<NavBar>
					<NavLink href='/'>Buy</NavLink>
					<NavLink href='/'>Chart</NavLink>
					<NavLink href='/'>Dashboard</NavLink>
					<NavLink href='/'>Trade</NavLink>
					<NavLink href='/'>Earn</NavLink>
					<NavLink href='/'>Community</NavLink>
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