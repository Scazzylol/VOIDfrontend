import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Iframe from 'react-iframe'
import Particles from '../../components/Particles'

const useStyles = makeStyles({
    iframeWrapper: {
        width: "70%",
        height: "600px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30px",
        marginBotton: "0px"
    },
    iframe: {
        width: "100%",
        height: "100%",
        border: "none"
    }
});

const BuyLayout = ({ targetUrl }) => {
    const classes = useStyles();

    return (
        <div className={classes.iframeWrapper}>
            <Iframe url={targetUrl}
                className={classes.iframe}
                id="content"
                display="initial"
                position="relative" />
        </div>
    );
}

export default BuyLayout;