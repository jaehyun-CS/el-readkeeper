import react from 'react';
import Book, { NewBookInfo } from '../types/Book';
import { collection, deleteDoc, doc, DocumentData, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { DB } from '../firebaseSetup';
import { v4 as uuidv4 } from 'uuid';


/**
 * Creates a new Book instance and adds it to Firestore
 * @param userId the uid of the user creating the book
 * @param bookData new book information
 */
export const createNewBook = async (userId: string, bookData: NewBookInfo) => {
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
        await setDoc(doc(DB, 'users', userId, 'books', newBookUid), newBook);
    } catch (err) {
        console.log('An error occurred while adding new book to firestore: ', err);
    }
};

/**
 * Updates an existing Book instance in Firestore with new information
 * @param userId the uid of the user updating the book
 * @param updatedBookData updated book information
 * @param bookUid the uid of the book being edited in Firestore
 */
export const updateBook = async (userId: string, updatedBookData: NewBookInfo, bookUid: string) => {
    try {
        await updateDoc(doc(DB, 'users', userId, 'books', bookUid), updatedBookData);
    } catch (err) {
        console.log('An error occurred while updating book in firestore: ', err);
    }
};

/**
 * Deletes an existing Book instance in Firestore
 * @param userId the uid of the user deleting the book
 * @param bookUid the uid of the book being deleted in Firestore
 */
export const deleteBook = async (userId: string, bookUid: string) => {
    try {
        await deleteDoc(doc(DB, 'users', userId, 'books', bookUid));
    } catch (err) {
        console.log('An error occurred while deleting book in firestore: ', err);
    }
};

/**
 * Fetches all book instances from Firestore
 * @param userId the uid of the user whose books are being queried
 */
export const fetchAllBooksForUser = async (userId: string) => {
    try {
        const querySnapshot = await getDocs(collection(DB, 'users', userId, 'books'));
        const booksArr: Book[] = [];

        querySnapshot.forEach(doc => {
            booksArr.push(convertToBook(doc.data()));
        });

        return booksArr;

    } catch (err) {
        console.log('An error occurred while fetching books from Firestore: ', err);
    }
};

const convertToBook = (doc: DocumentData): Book => {
    return {
        uid: doc.uid,
        title: doc.title,
        subtitle: doc.subtitle,
        author: doc.author,
        genre: doc.genre,
        rating: doc.rating,
        description: doc.description,
        key: doc.key
    };
};