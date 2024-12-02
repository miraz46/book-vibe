import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { saveStoredBookLists, saveStoredWishLists } from "../Utility/locanstorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookInt = parseInt(bookId)
    const book = books.find(book => book.bookId === bookInt);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    console.log(typeof bookId)

    const readBooks = () => {
        saveStoredBookLists(bookInt)
        toast("Added to the read books section.")
    };
    const wishLists = () => {
        saveStoredWishLists(bookInt)
        toast("Added to the wish lists section.")
    };


    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="h-[60vh] rounded-lg  bg-base-200 p-20" />
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p>By: {author}</p>
                    <div className="border-solid border-b-2 my-4"></div>
                    <p>{category}</p>
                    <div className="border-solid border-b-2 my-4"></div>
                    <p><span className="font-extrabold ">Review:</span> {review}</p>
                    <div className="my-4">TAGS: <span className="flex text-[#23BE0A] gap-2 flex-wrap">
                        {tags.map(tag => (
                            <p key={`${bookId}-${tag}`} className="bg-green-100 px-2 py-1 rounded text-sm">
                                {tag}
                            </p>
                        ))}
                    </span></div>
                    <div className="border-solid border-b-2 my-4"></div>
                    <div className="flex flex-col gap-4">
                        <p>Number of Pages: {totalPages}</p>
                        <p>Publisher: {publisher}</p>
                        <p>Year of Publishing: {yearOfPublishing}</p>
                        <p>Rating: {rating}</p>
                    </div>
                    <div className="flex gap-5 mt-6">
                        <button onClick={readBooks} className="btn">Read</button>
                        <button onClick={wishLists} className="btn btn-accent text-white">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;