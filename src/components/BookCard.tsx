import { Card, CardMedia, CardContent, CardActions, Typography, Grid, Button, Chip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Book from '../types/Book';


const styles = {
    card: {
        background: '#8C4D3F',
        width: 280,
        height: 400,
        paddingBottom: '.5em',
        border: 0,
        margin: '0 2em 2em 0 !important',
    },
    title: {
        fontFamily: 'Avenir Next Condensed',
        fontWeight: 'medium',
        color: 'white'
    },
    subtitle: {
        fontFamily: 'Avenir Next Condensed',
        color: 'lightGray'
    },
    author: {
        paddingTop: '2em',
        fontFamily: 'Avenir Next Condensed',
        fontStyle: 'italic',
        fontWeight: 'light',
        color: '#fff',
    },
    details: {
        fontFamily: 'Avenir Next',
        color: 'white',
        margin: '1em 0 0 1em'
    }
};

const handleClick = () => {
    console.log('CLICKED');
};

const BookCard = (props : Book): JSX.Element => {
    return (
        <Grid item xs={ 2.7 }>
            <Card elevation={ 7 } sx={ styles.card }>
                <Chip label='See Details' variant="outlined" sx={ styles.details } onClick={ handleClick } />
                <CardContent>
                    <Typography sx={ styles.title } variant='h4'>{ props.title }</Typography>
                    <Typography sx={ styles.subtitle } variant='h6'>{ props.subtitle }</Typography>
                    <Typography sx={ styles.author } variant='h6'>{ props.author }</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default BookCard;