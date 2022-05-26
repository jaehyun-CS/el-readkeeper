import AppHeader from '../../components/AppHeader';
import BookCard from '../../components/BookCard';
import Book from '../../types/Book';
import '../index.css';
import { Container, Fab, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import BookModal from '../../components/BookModal';
import { useEffect, useState } from 'react';
import { fetchAllBooksForUser } from '../../services/library-service';
import { useAuth } from '../../context/AuthContext';


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
    const [ books, setBooks ] = useState<Book[]>([]);
    const { currentUser } = useAuth();

    const getData = async () => {
        return await fetchAllBooksForUser(currentUser.uid);
    };

    const refreshData = (): void => {
        try {
            getData().then(books => {
                if (books) {
                    setBooks(books);
                } else {
                    setBooks([]);
                }
            });
        } catch (err) {
            console.log('Error occurred while refreshing library data: ', err);
        }
    };

    useEffect(() => {
        refreshData();
    }, []);

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
                        <BookModal book={ null } modalType='create'/>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    {
                        books.length > 0 ? books.map(book => {
                            return (
                                <BookCard
                                    uid={ book.uid }
                                    title={ book.title }
                                    subtitle={ book.subtitle }
                                    author={ book.author }
                                    genre={ book.genre }
                                    rating={ book.rating }
                                    description={ book.description }
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