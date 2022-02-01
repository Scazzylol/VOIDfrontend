import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from 'styled-components'

const useStyles = makeStyles({
    root: {
        paddingTop: "80px",
        paddingLeft: "150px",
        wordSpacing: "6px"
    },
    title: {
        paddingTop: "30px",
        paddingBottom: "10px",
        color: "white",
        fontFamily: "Mulish,sans-serif",
    },
    card: {
        background: "none",
        color: "white",
        paddingTop: "15px",
        fontFamily: "Mulish,sans-serif",
    },
    cardContent: {
        color: "white",
        fontFamily: "Mulish,sans-serif",
    },
    claim_text: {
        color: "rgb(255, 165, 0)"
    },
    highlight: {
        color: "rgb(255, 165, 0)"
    }
});


const ClaimButton = styled(Button)`
	background-color: rgb(255, 165, 0) !important;
	padding: 10px 45px !important;
	color: black !important;
	font-weight: bold !important;
	font-size: 15px !important;
`

const Highlighted = styled.span`
    color: rgb(255, 165, 0)
`

const DescTypography = styled(Typography)`
    margin-bottom: 10px !important;
`

const Title = styled.h1`
    color: white;
    font-family: "Mulish" ,sans-serif;
    text-transform: uppercase;
`

const Landing = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Title>Earn <Highlighted>DAI</Highlighted> by holding $VOID</Title>
            </div>
            <Card className={classes.card}>
                <DescTypography variant="headline" component="h2">
                    $VOID is a reflection dividend token on Fantom blockchain, holders are rewarded in <Highlighted>DAI</Highlighted>.
                </DescTypography>
                <DescTypography variant="headline" component="h2">
                    Contract address: 0x69a0f8D5428813c8aec85e3ff3E8E2c5d4D8A80c
                </DescTypography>
            </Card>
        </div >
    );
}

export default Landing;