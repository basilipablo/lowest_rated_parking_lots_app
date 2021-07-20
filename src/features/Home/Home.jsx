import React from 'react';
import ReactCSSTransition from 'react-addons-css-transition-group';
import './styles.css'
//Material-UI imports
import { Typography, Button } from '@material-ui/core';
//components import
import NavBar from '../NavBar/NavBar';

export default function Home() {

    return (
        <div className="App">
            <NavBar />
            
                <ReactCSSTransition
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}>
                    <div className="centered">
                        <Typography variant="h2" gutterBottom>Parking operation for the 21st Century</Typography>
                        <Button variant="contained" color="secondary">Search your next client</Button>
                    </div>
                </ReactCSSTransition> 
        </div>
    );
}

