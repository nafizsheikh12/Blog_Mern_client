import React from 'react'
import {AppBar, makeStyles, Toolbar,Typography} from '@material-ui/core'
import {Link} from 'react-router-dom';


const useStyles = makeStyles({
    component: {
        background: '#FFFFFF',
        color: 'black'
    },
    container: {
        justifyContent: 'center',
        '& > *': {
            padding: 20
        }
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar className= {classes.component}>
            <Toolbar className= {classes.container}>
                  <Link to='/' className={classes.link}> <Typography>Home</Typography> </Link>
                   <Typography>ABOUT</Typography>
                   <Typography>CONTACT</Typography>
                   <Typography>Login</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
