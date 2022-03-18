import React from 'react';
import Book from './../types/Book';
import { Formik, Form, Field } from 'formik';
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
    TextField,
    Alert
} from '@mui/material';
import { object, string, number } from 'yup';


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

    const FormValidator = object({
        title: string().required('A title is required bozo'),
        subtitle: string(),
        author: string().required('A book requires an author dumbass'),
        genre: string().required('A genre is required'),
        rating: number().required('Rating is also required')
    });

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
                    validationSchema={ FormValidator }
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
                        <Form>
                            <DialogContent>
                                <DialogContentText>
                                    { renderDescription() }
                                </DialogContentText>
                                <Field
                                    required
                                    type='input'
                                    autoFocus
                                    value={ values.title }
                                    margin='dense'
                                    name='title'
                                    label='Title'
                                    fullWidth
                                    variant='outlined'
                                    sx={{ marginTop: '1em' }}
                                    as={ TextField }
                                />
                                { errors.title && touched.title ? ( <Alert severity='error' variant='filled'>{ errors.title }</Alert>) : null }

                                <Field
                                    type='input'
                                    value={ values.subtitle }
                                    margin='dense'
                                    id='subtitle'
                                    label='Subtitle'
                                    fullWidth
                                    variant='outlined'
                                    as={ TextField }
                                />
                                { errors.subtitle && touched.subtitle ? ( <Alert severity='error' variant='filled'>{ errors.subtitle }</Alert>) : null }

                                <Field
                                    required
                                    type='input'
                                    value={ values.author }
                                    margin='dense'
                                    id='author'
                                    label='Author'
                                    fullWidth
                                    variant='outlined'
                                    as={ TextField }
                                />
                                { errors.author && touched.author ? ( <Alert severity='error' variant='filled'>{ errors.author }</Alert>) : null }

                                <Field
                                    required
                                    type='input'
                                    value={ values.genre }
                                    margin='dense'
                                    id='genre'
                                    label='Genre'
                                    fullWidth
                                    variant='outlined'
                                    as={ TextField }
                                />
                                { errors.genre && touched.genre ? ( <Alert severity='error' variant='filled'>{ errors.genre }</Alert>) : null }

                                <Field
                                    required
                                    type='input'
                                    value={ values.rating }
                                    margin='dense'
                                    id='rating'
                                    label='Rating'
                                    fullWidth
                                    variant='outlined'
                                    as={ TextField }
                                />
                                { errors.rating && touched.rating ? ( <Alert severity='error' variant='filled'>{ errors.rating }</Alert>) : null }

                            </DialogContent>
                            <DialogActions>
                                <Button variant="text" onClick={ toggleModal } sx={ styles.cancelButton }>
                                    Cancel
                                </Button>
                                <Button disabled={ isSubmitting } type='submit' variant="contained" sx={ styles.submitButton }>
                                    Submit
                                </Button>
                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </Dialog>
        </>
    );
};

export default BookModal;