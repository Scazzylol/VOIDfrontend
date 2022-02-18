import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import styled from 'styled-components'

const useStyles = makeStyles({
    root: {
        paddingTop: "40px",
        wordSpacing: "6px"
    },
    title: {
        paddingTop: "30px",
        paddingBottom: "10px",
        color: "white",
        fontFamily: "Mulish,sans-serif",
    },
    desc: {
        background: "none",
        color: "white",
        paddingTop: "15px",
        fontFamily: "Mulish,sans-serif"
    },
    card: {
        background: "none",
        color: "white",
        paddingTop: "15px",
        fontFamily: "Mulish,sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "50px"
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
    },
    space: {
        marginBottom: "50px"
    }
});

const Highlighted = styled.span`
    color: rgb(255, 165, 0)
`

const DescTypography = styled(Typography)`    
    margin-top: 15px !important;
`

const Title = styled.h1`
    color: white;
    font-family: "Mulish" ,sans-serif;
    text-transform: uppercase;
`
const MainContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
    padding-top: 80px;
    padding-right: 200px;
`

const Image = styled.img`
    filter: invert(1);
    height: 200px;
`

const Landing = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={1} />
                <Grid item xs={7}>
                    <Card className={classes.desc}>
                        <Title>Earn <Highlighted>DAI</Highlighted> by holding $VOID</Title>
                    </Card>
                </Grid>
                <Grid item xs="auto" />
            </Grid>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <Card className={classes.desc}>
                        <DescTypography variant="headline" component="h2">
                            $VOID is a reflection dividend token on Fantom blockchain, holders are rewarded in <Highlighted>DAI</Highlighted>.
                        </DescTypography>
                        <DescTypography variant="headline" component="h2">
                            Contract address: 0x69a0f8D5428813c8aec85e3ff3E8E2c5d4D8A80c
                        </DescTypography>
                    </Card>
                </Grid>
                <Grid item xs="auto" />
            </Grid>
            <div className={classes.space} />
            <Grid sx={{ flexGrow: 1 }} container spacing={1}>
                <Grid item xs={1} />
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <Image src='/img/icons/bank.png' />
                        <DescTypography variant="headline" component="h2">
                            1000T Tokens
                        </DescTypography>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <Image src='/img/icons/dev.png' />
                        <DescTypography variant="headline" component="h2">
                            17% Slippage
                        </DescTypography>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <Image src='/img/icons/dividend.png' />
                        <DescTypography variant="headline" component="h2">
                            9.5% Reflections
                        </DescTypography>
                    </Card>
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </div >
    );
}

export default Landing;