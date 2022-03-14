import React from 'react';
import Book from './../types/Book';
import Formik from 'formik';


type BookModalProps = {
    book: Book,
    modalType: 'create' | 'edit'
};

/**
 * Modal used for creating and editing Books in the library
 *
 * @constructor
 */
const BookModal = (props: BookModalProps): JSX.Element => {
    const [ open, setOpen ] = React.useState(false);

    const toggleModal = () => {
        setOpen(!open);
    };

    return (
        <>
        </>
    );
};

export default BookModal;