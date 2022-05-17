import react from 'react';
import Book, { NewBookInfo } from '../types/Book';
import { doc, setDoc } from 'firebase/firestore';
import { DB } from '../firebaseSetup';
import { v4 as uuidv4 } from 'uuid';


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