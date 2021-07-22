import {
    createTheme
} from '@material-ui/core/styles'

const theme = createTheme({
    palette: {
        // Orange - LightBlue
        primary: {
            main: '#FA824C',
        },
        secondary: {
            main: '#9BCCD7',
        },
        common: {
            white: 'white',
        },
        action: {
            hover: '#E5E5E5',
        }
    }
})

export default theme;