import React, { useState } from 'react';
import useStyles from './Styles'
import { useDispatch, useSelector } from "react-redux";
import { getParkings } from '../../app/actions';
//Material UI imports
import { TextField, Button, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab'

//Components imports
import ClientsTable from './ClientsTable/ClientsTable';

export default function ClientSearch() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [showTable, setShowTable] = useState(false);
    const [inputText, setInputText] = useState('');
    const [offset, setOffset] = useState(0);

    const { total } = useSelector((state) => ({ ...state }))

    const handleSearch = () => {
        setShowTable(true);
        dispatch(getParkings(inputText, offset))
    }

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    const handlePaginationChange = (e, value) => {
        setOffset(--value*6);
        dispatch(getParkings(inputText, offset))
    }

    return (
        <div className={classes.searchDiv}>
            <TextField label="Search a City" variant="outlined" onChange={(e) => handleChange(e)}/>
            <Button variant="contained" color="secondary" className={classes.button} onClick={() => handleSearch()}>Search</Button>
            {
                showTable && total ?
                < ClientsTable /> :
                null
            }
            {showTable && total ?
                <Pagination count={Math.ceil(total / 6)} defaultPage={Math.ceil(total / 6)} variant="outlined" shape="rounded" showFirstButton showLastButton className={classes.pagination} onChange={handlePaginationChange}/>
            : null    
            }
            {showTable && !total ?
            <Typography>Sorry, we don't have any Parking Lots available in that city!</Typography>
            : null}
        </div>
    );
}
