import { createContext, useState } from "react";
import axios from "axios";

export const BooksContext = createContext();

export const Provider = ({ children }) => {
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const res = await axios.get('http://localhost:3001/books')

        setBooks(res.data)
    }
    const createBook = async (title) => {
        const res = await axios.post('http://localhost:3001/books', {
            title
        })
        setBooks([...books, res.data])
    }

    const deleteBookByID = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)
        const updatedBooks = books.filter(book => book.id !== id)

        setBooks(updatedBooks)
    }
    
    const updateBook = async (updatedBook) => {
        const response = await axios.put(`http://localhost:3001/books/${updatedBook.id}`, { title: updatedBook.title });
        const updatedBooks = books.map(book => {
            if (book.id === response.data.id) {
                return { ...book, ...response.data }
            } else {
                return book;
            }
        });
        setBooks(updatedBooks);
    };

    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        deleteBookByID,
        updateBook
    }

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}