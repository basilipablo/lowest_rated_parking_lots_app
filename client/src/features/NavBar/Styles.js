import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        position: "absolute;right:0;top:0",
        marginTop: theme.spacing(3),
        marginRight: theme.spacing(35),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(1),
        },
        color: 'inherit',
        '&:hover': {
            cursor: "pointer",
        }
    },
    img: {
        width: 200,
        marginLeft: theme.spacing(20),
    }
}));

export default useStyles;