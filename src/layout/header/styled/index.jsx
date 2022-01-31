
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
    background-color: #161616;
    display: flex;
    flex: row;
    align-items: center;
    justify-content: space-between;
    color: white;
    height: 64px;
`

export const MainContainer = styled.div`
    display: flex;
    flex: row;
    align-items: center;
    justify-content: space-between;
`

export const LogoLink = styled.a`
    color: black;
`

export const Logo = styled.img`
    width: 54px;
    height: 54px;
`

export const LogoContainer = styled.span`
    padding: 2px 15px;
    height: auto;
    width: 80px;
`

export const NavBar = styled.span`
    width: auto;
    height: auto;
`

export const NavLink = styled(Link)`
    margin: 0;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    margin-bottom: 0.35em;
    margin-left: 16px;
    margin-right: 16px;
    color: white;
    text-decoration: none;
`

export const ExternalLink = styled.a`
    margin: 0;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    margin-bottom: 0.35em;
    margin-left: 16px;
    margin-right: 16px;
    color: white;
    text-decoration: none;
`

export const WalletAmount = styled.a`
    text-transform: none;
    padding-right: 20px;
    margin: 0px;
`

export const WallertWrapper = styled.span`
    display: flex;
    align-items: center;
    padding-right: 20px;
`