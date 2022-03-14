import AppHeader from '../../components/AppHeader';
import BookCard from '../../components/BookCard';
import Book from '../../types/Book';
import '../index.css';
import { Container, Fab, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const books: Book[] = [
    {
        title: 'God Is Not One',
        subtitle: 'The Eight Rival Religions That Run the World',
        author: 'Stephen Prothero',
        genre: 'Religion',
        rating: 0,
        key: 1
    },
    {
        title: 'God Is Not One',
        subtitle: 'The Eight Rival Religions That Run the World',
        author: 'Stephen Prothero',
        genre: 'Religion',
        rating: 0,
        key: 2
    },
    {
        title: 'God Is Not One',
        subtitle: 'The Eight Rival Religions That Run the World',
        author: 'Stephen Prothero',
        genre: 'Religion',
        rating: 0,
        key: 3
    },
    {
        title: 'God Is Not One',
        subtitle: 'The Eight Rival Religions That Run the World',
        author: 'Stephen Prothero',
        genre: 'Religion',
        rating: 0,
        key: 4
    },
    {
        title: 'God Is Not One',
        subtitle: 'The Eight Rival Religions That Run the World',
        author: 'Stephen Prothero',
        genre: 'Religion',
        rating: 0,
        key: 5
    }
];

const styles = {
    heading: {
        fontFamily: 'Avenir Next Condensed',
        color: '#260101',
        fontWeight: 'medium',
        padding: '.5em 0 1em 0'
    },
    button: {
        margin: '2em 0 0 2em',
        backgroundColor: '#8C4D3F',
        color: '#fff',

        '&:hover': {
            backgroundColor: '#B36250',
        }
    },
    emptyMessage: {
        padding: '.5em 0 5em 1.5em',
        fontFamily: 'Avenir Next',
        color: '#260101',
    }
};


const LibraryPage = (): JSX.Element => {
    return (
        <>
            <AppHeader />
            <Container id='container'>
                <Grid container>
                    <Grid item>
                        <Typography variant='h3' sx={ styles.heading }>
                            Your Library
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Fab size='medium' color="primary" aria-label="add" sx={ styles.button }>
                            <AddIcon />
                        </Fab>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    {
                        books.length > 0 ? books.map(book => {
                            return (
                                <BookCard
                                    title={ book.title }
                                    subtitle={ book.subtitle }
                                    author={ book.author }
                                    genre={ book.genre }
                                    rating={ book.rating }
                                    key={ book.key }
                                />
                            );
                        }) : <Typography variant='h5' sx={ styles.emptyMessage }>You don&apos;t currently have any books. Add one!</Typography>
                    }
                </Grid>
            </Container>
        </>
    );
};

export default LibraryPage;