import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Grid, Button, Chip, Popover, Paper, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Book from '../types/Book';
import BookModal from '../components/BookModal';


const styles = {
    card: {
        background: '#8C4D3F',
        width: 265,
        height: 375,
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
        fontWeight: 'normal',
        textTransform: 'capitalize',
        color: 'white',
        margin: '1em 0 0 1em'
    },
    hiddenButton: {
        '&:hover': {
            backgroundColor: '#8C4D3F',
        }
    },
    popper: {
        padding: '1em'
    },
    text: {
        fontFamily: 'Avenir Next',
    },
    deleteButton: {
        color: 'white',
        margin: '.8rem 0 0 1rem'
    }
};

/**
 * Renders a visualization of a Book's data, in a card format
 * @param props
 * @constructor
 */
const BookCard = (props : Book): JSX.Element => {

    const [ anchorEl, setAnchorEl ] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const id = open ? 'popover' : undefined;

    return (
        <Grid item xs={ 2.7 }>
            <Card elevation={ 7 } sx={ styles.card }>

                <Button sx={ styles.hiddenButton } size='small' onClick={ handleClick }>
                    <Chip label="See Details" variant="outlined" sx={ styles.details }/>
                </Button>

                <Popover
                    id={ id }
                    open={ open }
                    onMouseLeave={ handleClose }
                    onClose={ handleClose }
                    anchorEl={ anchorEl }
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                    }}
                >
                    <Paper sx={ styles.popper } elevation={3}>
                        <Typography sx={ styles.text } variant='h6'>{ props.title }</Typography>
                        <Typography sx={ styles.text } variant='body1'>{ props.subtitle && `Subtitle: ${ props.subtitle }` }</Typography>
                        <Typography sx={ styles.text } variant='body1'>Author: { props.author }</Typography>
                        <Typography sx={ styles.text } variant='body1'>Genre: { props.genre }</Typography>
                        <Typography sx={ styles.text } variant='body1'>Rating: { props.rating }</Typography>
                        <Typography sx={ styles.text } variant='body1'>{ props.description && `Description: ${ props.description }` }</Typography>
                    </Paper>
                </Popover>

                <BookModal book={ props } modalType='edit' />

                <IconButton aria-label='delete' size='large' sx={ styles.deleteButton }>
                    <DeleteOutlineIcon />
                </IconButton>

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