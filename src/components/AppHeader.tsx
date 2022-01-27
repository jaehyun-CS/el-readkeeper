import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


const AppHeader = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <AppBar position='static' sx={{ width: 'fullWidth', background: '#260101'}}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant='h4'component='div' sx={{ fontFamily: 'Didot' }}>ReadKeeper</Typography>
                <Button sx={{ position: 'absolute', right: '1em' }} onClick={ () => { navigate('/login'); } }>
                    <Typography variant='h6' sx={{ color: 'white', fontFamily: 'Avenir Next' }}>
                        Log out
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default AppHeader;