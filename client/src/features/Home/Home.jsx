import React, {useEffect, useState} from 'react';
import ReactCSSTransition from 'react-addons-css-transition-group';
import './styles.css'
//Material-UI imports
import { Typography, Button } from '@material-ui/core';
//components import
import NavBar from '../NavBar/NavBar';
import ClientSearch from '../ClientSearch/ClientSearch'

export default function Home() {
    const [showText, setShowText] = useState(false)
    const [bringSearch, setBringSearch] = useState(false)

    const showSearch = () => {
        setShowText(false);
        setBringSearch(true);
    }

    useEffect(() => {
        setShowText(true);
    }, [])

    return (
        <div className="App">
            <NavBar />
            
                <ReactCSSTransition
                    transitionName="fade"
                    transitionEnter={true}
                    transitionEnterTimeout={1000}
                    transitionLeave={true}
                    transitionLeaveTimeout={1000}>
                    {showText ? 
                    <div className="centered">
                        <Typography variant="h2" gutterBottom>Parking operation for the 21st Century</Typography>
                        <Button variant="contained" color="secondary" onClick={() => showSearch()}>Search your next client</Button>
                    </div>
                    :
                    null
                    }
                    {bringSearch ? 
                    <div>
                        <ClientSearch />
                    </div>
                    :
                    null
                    }
                </ReactCSSTransition> 
        </div>
    );
}

