import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    searchDiv: {
        marginTop: theme.spacing(4),
        alignItems: 'center',
    },
    pagination: {
        position: 'absolute',
        backgroundColor: theme.palette.action.hover,
        width: theme.spacing(53),
        top: theme.spacing(75),
        left: theme.spacing(50),
        borderRadius: theme.spacing(1),
    }
}));

export default useStyles;