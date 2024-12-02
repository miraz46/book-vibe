import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, author, image,  rating, category, tags} = book;
    return (
        <Link to={`/bookDetails/${bookId}`} className="block no-underline">
        <div className="card border-solid border-2 p-6 hover:shadow-lg transition-shadow duration-300">
            <figure className="px-10 pt-10 bg-base-300">
                <img
                    src={image}
                    alt={bookName}
                    className="rounded-xl w-[120px] h-[166px]" />
            </figure>
            <div className="card-body">
                <div className="flex text-[#23BE0A] items-center justify-center gap-2 flex-wrap">
                    {tags.map(tag => (
                        <p key={`${bookId}-${tag}`} className="bg-green-100 px-2 py-1 rounded text-sm">{tag}</p>
                    ))}
                </div>
                <h2 className="card-title font-bold text-2xl">{bookName}</h2>
                <p>By: {author}</p>
                <div className="border-dashed border-b-2 my-4"></div>
                <div className="flex justify-between items-center">
                    <div>{category}</div>
                    <div className="flex items-center gap-1">{rating} <CiStar /></div>
                </div>
            </div>
        </div>
    </Link>
    );
};

export default Book;