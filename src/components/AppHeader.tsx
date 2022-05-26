import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, ListItemButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';


const styles = {
    logoText: {
        fontFamily: 'Didot'
    },
    appBar: {
        width: 'fullWidth',
        background: '#260101'
    },
    box: {
        width: 250
    },
    libraryIcon: {
        paddingLeft: '.3em',
        fontSize: '40px'
    },
    logoutButton: {
        position: 'absolute',
        right: '1em'
    },
    logoutText: {
        color: 'white',
        fontFamily: 'Avenir Next'
    },
    listText: {
        fontFamily: 'Avenir Next'
    },
    listButton: {
        paddingLeft: 0,
    }
};

const AppHeader = (): JSX.Element => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const [ open, setOpen ] = useState(false);
    const [ myError, setMyError ] = useState('');

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleSignout = () => {

        try {
            setMyError('');
            logout();
            navigate('/login');
        } catch {
            setMyError('Failed to log out');
        }

    };

    return (
        <AppBar position='static' sx={ styles.appBar }>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={ toggleDrawer }
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor='left'
                    open={open}
                    onClose={ toggleDrawer }
                >
                    <Box
                        sx={ styles.box }
                        role="presentation"
                        onClick={toggleDrawer}
                    >
                        <List>
                            <ListItem>
                                <ListItemButton sx={ styles.listButton } onClick={ () => { navigate('/library'); } }>
                                    <ListItemIcon>
                                        <LibraryBooksIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='h6' sx={ styles.listText }>
                                            Your Library
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton sx={ styles.listButton } onClick={ () => { navigate('/readings'); } }>
                                    <ListItemIcon>
                                        <BookmarksIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='h6' sx={ styles.listText }>
                                            Your Readings
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
                <Typography variant='h4'component='div' sx={ styles.logoText }>ReadKeeper</Typography>
                <LocalLibraryIcon sx={ styles.libraryIcon }/>
                <Button sx={ styles.logoutButton } onClick={ handleSignout }>
                    <Typography variant='h6' sx={ styles.logoutText }>
                        Log out
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default AppHeader;