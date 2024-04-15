import { useState } from "react"
import { useBooksContext } from "../hooks/use-books-context"

export const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title)
    const { updateBook } = useBooksContext()
    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit()
        updateBook({ ...book, title })
    }

    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary">Save</button>
        </form>
    )
}