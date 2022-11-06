/**
 * Describes a Book instance
 */
interface Book {
    uid: string | null,
    title: string,
    subtitle: string | null,
    author: string,
    genre: string,
    rating: number,
    description: string,
    key: string,
    pageCount: number
}

export type NewBookInfo = Omit<Book, 'uid' | 'key'>;

export default Book;