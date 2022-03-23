/**
 * Describes a Book instance
 */
interface Book {
    title: string,
    subtitle: string | null,
    author: string,
    genre: string,
    rating: number,
    description: string | null,
    key: number
}

export default Book;