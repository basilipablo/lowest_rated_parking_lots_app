import React from 'react';
import { useSelector } from 'react-redux';
import {useStyles, StyledTableCell, StyledTableRow} from './Styles'
//Material UI imports
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Avatar, Link } from '@material-ui/core';
import { Image, StarBorderOutlined } from '@material-ui/icons';
import LinkIcon from '@material-ui/icons/Link';

export default function ClientsTable() {
    const classes = useStyles();
    const { businesses } = useSelector((state) => ({ ...state }))
    const preventDefault = (event, link) => {
        event.preventDefault()
        window.open(link, "_blank");
    }

    /*const stars = (number) => {
        var scoreArray = createArrayFromNumber(number);
        return scoreArray.map(number => <StarBorderOutlined key={number} fontSize="small" />)
    }*/
    

    return (
        <TableContainer className={classes.tableContainer}>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <StyledTableCell><Image /></StyledTableCell>
                        <StyledTableCell align="center">Address</StyledTableCell>
                        <StyledTableCell align="center">Stars</StyledTableCell>
                        <StyledTableCell align="center">Reviews</StyledTableCell>
                        <StyledTableCell align="center">Score</StyledTableCell>
                        <StyledTableCell align="center">Yelp Page</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {businesses.map(b =>
                        <StyledTableRow key={b.id}>
                            <StyledTableCell align="right"><Avatar src={b.image_url}/></StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {b.location.display_address.join(' ,')}
                            </StyledTableCell>
                            <TableCell align="right">{b.rating} <StarBorderOutlined key={1} fontSize="small"/></TableCell>
                            <StyledTableCell align="right">{b.review_count}</StyledTableCell>
                            <StyledTableCell align="right">{(b.review_count*b.rating)/b.review_count++}</StyledTableCell>
                            <StyledTableCell align="right"><Link href='#' onClick={(e) => preventDefault(e, b.url)}><LinkIcon /></Link></StyledTableCell>
                        </StyledTableRow>
                        )}
                    
                </TableBody>
            </Table>
        </TableContainer>
        );
}
