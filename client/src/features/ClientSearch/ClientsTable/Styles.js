import {
    makeStyles, withStyles
} from '@material-ui/core/styles';
import { TableCell, TableRow } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    table: {
        
    },
    tableContainer: {
        position: 'absolute',
        top: theme.spacing(25),
        left: theme.spacing(30),
        width: '60%',
        borderRadius: theme.spacing(1),
    },
}));

export const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:nth-of-type(even)': {
            backgroundColor: theme.palette.common.white,
        },
    },
}))(TableRow);
