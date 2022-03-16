import React from 'react';
import Book from './../types/Book';
import { Formik } from 'formik';
import AddIcon from '@mui/icons-material/Add';
import {
    Button,
    Fab,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    TextField
} from '@mui/material';


type BookModalProps = {
    book: Book | null, // null when creating a new Book
    modalType: 'create' | 'edit'
};

const styles = {
    createButton: {
        margin: '2em 0 0 2em',
        backgroundColor: '#8C4D3F',
        color: '#fff',

        '&:hover': {
            backgroundColor: '#B36250',
        }
    },
    editButton: {
        fontFamily: 'Avenir Next',
        color: 'white',
        margin: '1em 0 0 1em'
    },
    submitButton: {
        fontFamily: 'Avenir Next',
        margin: '0 1.5em 1.5em 0',
        backgroundColor: '#260101',

        '&:hover': {
            backgroundColor: '#8C4D3F'
        }
    },
    cancelButton: {
        backgroundColor: '#FFFFFF',
        color: '#260101',
        fontFamily: 'Avenir Next',
        margin: '0 .5em 1.5em 0',

        '&:hover': {
            backgroundColor: '#D9D9D9'
        }
    }
};

/**
 * Modal used for creating and editing Books in the library
 *
 * @constructor
 */
const BookModal = (props: BookModalProps): JSX.Element => {
    const [ open, setOpen ] = React.useState(false);


    const renderButton = (): JSX.Element => {
        return props.modalType === 'create' ?
            (
                <Fab size='medium' color="primary" aria-label="add" sx={ styles.createButton } onClick={ toggleModal }>
                    <AddIcon />
                </Fab>
            )
            :
            (
                <Chip label='Edit' variant="outlined" sx={ styles.editButton } onClick={ toggleModal } />
            );
    };

    const renderTitle = (): string => {
        return props.modalType === 'create' ? 'Create New Book' : 'Edit Book';
    };

    const renderDescription = (): string => {
        return props.modalType === 'create' ? 'Fill out the appropriate fields below' : 'Edit the book information below';
    };

    const toggleModal = () => {
        setOpen(!open);
    };

    const initialValues = props.book === null ?
        {
            title: '',
            subtitle: '',
            author: '',
            genre: '',
            rating: ''
        }
        :
        {
            title: props.book.title,
            subtitle: props.book.subtitle,
            author: props.book.author,
            genre: props.book.genre,
            rating: props.book.rating
        };

    return (
        <>
            { renderButton() }

            <Dialog open={ open } onClose={ toggleModal } >
                <DialogTitle>
                    { renderTitle() }
                </DialogTitle>
                <Formik
                    initialValues={ initialValues }
                    onSubmit={ (data, { setSubmitting }) => {
                        console.log('Submitting');
                        setSubmitting(false);
                    }}
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        errors,
                        touched,
                        isSubmitting
                    }) => (
                        <form>
                            <DialogContent>
                                <DialogContentText>
                                    { renderDescription() }
                                </DialogContentText>
                                <TextField
                                    required
                                    autoFocus
                                    value={ values.title }
                                    margin='dense'
                                    id='title'
                                    label='Title'
                                    fullWidth
                                    variant='outlined'
                                    sx={{ marginTop: '1em' }}
                                />
                                <TextField
                                    value={ values.subtitle }
                                    margin='dense'
                                    id='subtitle'
                                    label='Subtitle'
                                    fullWidth
                                    variant='outlined'
                                />
                                <TextField
                                    required
                                    value={ values.author }
                                    margin='dense'
                                    id='author'
                                    label='Author'
                                    fullWidth
                                    variant='outlined'
                                />
                                <TextField
                                    required
                                    value={ values.genre }
                                    margin='dense'
                                    id='genre'
                                    label='Genre'
                                    fullWidth
                                    variant='outlined'
                                />
                                <TextField
                                    required
                                    value={ values.rating }
                                    margin='dense'
                                    id='rating'
                                    label='Rating'
                                    fullWidth
                                    variant='outlined'
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button variant="text" onClick={ toggleModal } sx={ styles.cancelButton }>
                                    Cancel
                                </Button>
                                <Button type='submit' variant="contained" sx={ styles.submitButton }>
                                    Submit
                                </Button>
                            </DialogActions>
                        </form>
                    )}
                </Formik>
            </Dialog>
        </>
    );
};

export default BookModal;