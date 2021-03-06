import React from 'react';
import useStyles from './Styles'
import { AppBar, Toolbar, Link } from '@material-ui/core';
import img from '../../app/assets/logo544.png'

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="white" width="100%">
                <Toolbar>
                    <img src={img} alt="air garage" className={classes.img} />
                    <Link className={classes.title} underline="none" onClick={() => {
                        window.open("https://www.airgarage.com/product/management", "_blank");
                    }}>
                        Talk to Sales
                    </Link>
               </Toolbar>
            </AppBar>
        </div>
    );
}
