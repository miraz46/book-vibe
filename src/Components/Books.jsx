import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
        
    }, [])
    return (
        <div>
            <h2 className="text-center font-bold text-4xl mb-9">Books</h2>
            <div className="grid grid-cols-3 gap-6 ">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;