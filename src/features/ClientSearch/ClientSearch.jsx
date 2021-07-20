import React, { useState } from 'react';
import useStyles from './Styles'
//Material UI imports
import { TextField, Button, Fab } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
//Components imports
import ClientsTable from './ClientsTable/ClientsTable';

export default function ClientSearch() {
    const classes = useStyles();

    const [showTable, setShowTable] = useState(false);

    const handleSearch = () => {
        setShowTable(true);
    }

    return (
        <div>
            <TextField label="Search a City" variant="outlined"/>
            <Button variant="contained" color="secondary" className={classes.button} onClick={() => handleSearch()}>Search</Button>
            <div></div>
            <Fab color="secondary" variant="extended" className={classes.button}>
                <LocationOnIcon />
                Near Me
            </Fab>
            {
                showTable ?
                < ClientsTable /> :
                null
            }
        </div>
    );
}
