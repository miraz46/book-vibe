import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { getStoredBookLists } from "../Utility/locanstorage";
import ListedBooksCards from "./ListedBooksCards";


const ListedBooks = () => {
    const [read, setRead] = useState(true);
    const [wish, setWish] = useState(false);
    const allBooks = useLoaderData();
    const [storedBooks, setStoredBooks] = useState([]);

    useEffect(() => {
        const storedBooksListsId = getStoredBookLists();
        if (allBooks.length > 0) {
            const booksListed = allBooks.filter(book => storedBooksListsId.includes(book.bookId))
            setStoredBooks(booksListed);
        }
    }, [allBooks])

    const handleSort = (order) => {
        const sortedBooks = [...storedBooks].sort((a, b) => {
          if (order === "asc") {
            return a.totalPages - b.totalPages;
          } else {
            return b.totalPages - a.totalPages;
          }
        });
        setStoredBooks(sortedBooks);
      };
    const handleReadBooks = () => {
        setWish(false)
        setRead(true)
    }
    const handleWishlist = () => {
        setRead(false)
        setWish(true)
    }

    return (
        <div>
            <h2 className="text-center bg-base-300 font-bold text-3xl py-5 rounded-xl mt-4 text-black">Books</h2>
            {/* Dropdown */}
            <details className="dropdown flex justify-center mt-4 mb-14">
                <summary className="btn m-1 text-white bg-[#23BE0A] border-none">Sort By <FaChevronDown /></summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort("asc")}><a>Smallest to Largest Page Count</a></li>
                    <li onClick={() => handleSort("desc")}><a>Largest to Smallest Page Count</a></li>
                </ul>
            </details>
            {/* Tab */}
            <div role="tablist" className="tabs tabs-lifted">
                <a onClick={handleReadBooks} role="tab" className={`tab  ${read && 'tab-active'}`}>Read Books</a>
                <a onClick={handleWishlist} role="tab" className={`tab  ${wish && 'tab-active'}`}>Wishlist Books</a>
            </div>
            {/* Cards */}
            <div className={`${read || 'hidden'} mt-8 `}>
                {
                    storedBooks.map(book => <ListedBooksCards book={book} key={book.bookId}></ListedBooksCards>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;