import { useEffect } from "react"
import { BookCreate } from "./components/BookCreate"
import { BookList } from "./components/BookList"
import { useBooksContext } from "./hooks/use-books-context"

export const App = () => {
    const { fetchBooks } = useBooksContext();
    useEffect(() => {
        fetchBooks();
    }, [])


    return (
        <div>
            <h4>Reading List</h4>
            <BookList />
            <BookCreate />
        </div>
    )
}