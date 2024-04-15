import { useContext } from "react";
import { BooksContext } from "../context/books";

export const useBooksContext = () => useContext(BooksContext);