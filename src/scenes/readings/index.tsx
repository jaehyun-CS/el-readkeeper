import '../index.css';
import AppHeader from '../../components/AppHeader';
import { Container, Typography } from '@mui/material';


const ReadingsPage = (): JSX.Element => {
    return (
        <>
            <AppHeader />
            <Container id='container'>
                <Typography variant='h3' sx={{ fontFamily: 'Avenir Next Condensed', color: '#260101', fontWeight: 'medium', padding: '.5em 0 3em 0' }}>Your Readings</Typography>
            </Container>
        </>
    );
};

export default ReadingsPage;