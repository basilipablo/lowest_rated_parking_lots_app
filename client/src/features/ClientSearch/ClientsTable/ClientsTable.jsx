import React from 'react';
import {useStyles, StyledTableCell, StyledTableRow} from './Styles'
//Material UI imports
import { TableContainer, Table, TableHead, TableRow, TableBody, Paper } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';

export default function ClientsTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <StyledTableCell><ImageIcon /></StyledTableCell>
                        <StyledTableCell align="right">Address</StyledTableCell>
                        <StyledTableCell align="right">Stars</StyledTableCell>
                        <StyledTableCell align="right">Reviews</StyledTableCell>
                        <StyledTableCell align="right">Score</StyledTableCell>
                        <StyledTableCell align="right">Yelp Page</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <StyledTableRow key={1}>
                        <StyledTableCell component="th" scope="row">
                            Giannis
                        </StyledTableCell>
                        <StyledTableCell align="right">12</StyledTableCell>
                        <StyledTableCell align="right">Giannis</StyledTableCell>
                        <StyledTableCell align="right">12</StyledTableCell>
                        <StyledTableCell align="right">Giannis</StyledTableCell>
                        <StyledTableCell align="right">12</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
