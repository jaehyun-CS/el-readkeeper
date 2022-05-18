import react from 'react';
import Book, { NewBookInfo } from '../types/Book';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { DB } from '../firebaseSetup';
import { v4 as uuidv4 } from 'uuid';


/**
 * Creates a new Book instance and adds it to Firestore
 * @param bookData new book information
 */
export const createNewBook = async (bookData: NewBookInfo) => {
    const newBookUid = uuidv4();
    const newBookKey = uuidv4();

    const newBook: Book = {
        uid: newBookUid,
        title: bookData.title,
        subtitle: bookData.subtitle,
        author: bookData.author,
        genre: bookData.genre,
        rating: bookData.rating,
        description: bookData.description,
        key: newBookKey
    };

    try {
        await setDoc(doc(DB, 'books', newBookUid), newBook);
    } catch (err) {
        console.log('An error occurred while adding new book to firestore: ', err);
    }
};

/**
 * Updates an existing Book instance in Firestore with new information
 * @param updatedBookData updated book information
 * @param bookUid the uid of the book being edited in firestore
 */
export const updateBook = async (updatedBookData: NewBookInfo, bookUid: string) => {
    try {
        await updateDoc(doc(DB, 'books', bookUid), updatedBookData);
    } catch (err) {
        console.log('An error occurred while updating book in firestore: ', err);
    }
};