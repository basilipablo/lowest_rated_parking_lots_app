import React, { useState } from 'react';
import useStyles from './Styles'
import { useDispatch } from "react-redux";
import { getParkings } from '../../app/actions';
//Material UI imports
import { TextField, Button, Fab } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
//Components imports
import ClientsTable from './ClientsTable/ClientsTable';

export default function ClientSearch() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [showTable, setShowTable] = useState(false);
    const [inputText, setInputText] = useState('');

    const handleSearch = () => {
        setShowTable(true);
        dispatch(getParkings(inputText))
    }

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    return (
        <div>
            <TextField label="Search a City" variant="outlined" onChange={(e) => handleChange(e)}/>
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
