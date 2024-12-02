import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { getStoredBookLists } from "../Utility/locanstorage";

const ListedBooks = () => {
    const [read, setRead] = useState(true);
    const [wish, setWish] = useState(false)

    const allBooks =useLoaderData();
    const [storedBook, setStoredBooks]=useState([])

    useEffect(()=>{
        const storedBooksListsId = getStoredBookLists();
        console.log(storedBooksListsId);
        // const parseStoredBookLists = JSON.parse(storedBooksListsId);
        console.log()
        if(allBooks.length > 0){
            const storedBooksLists = [];
            for(const id of storedBooksListsId){
                
                console.log(id);
            }
        }
    },[allBooks])


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
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>
            {/* Tab */}
            <div role="tablist" className="tabs tabs-lifted">
                <a onClick={handleReadBooks} role="tab" className={`tab  ${read && 'tab-active'}`}>Read Books</a>
                <a onClick={handleWishlist} role="tab" className={`tab  ${wish && 'tab-active'}`}>Wishlist Books</a>
            </div>
            {/* Cards */}
            <div className={`${read || 'hidden'} mt-8`}>
                <div className="card lg:card-side h-[277px] bg-base-100 border-[1px]">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;