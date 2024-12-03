import { CiLocationOn } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { RiPagesFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const ListedBooksCards = ({ book }) => {
    const { bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    // console.log(typeof totalPages)
    return (
        <div className="card card-side bg-base-100 shadow-xl border-[1px] mt-6">
            <figure className="aspect-w-4 aspect-h-3 w-[150px] bg-gray-200 p-6">
                <img
                    className="object-cover w-full h-full"
                    src={image}
                    alt="Book Cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>Written by {author}</p>
                <div className="flex items-center gap-3 mb-[30px]">Tag:
                    {tags.map((tag, idx) => <div className="bg-base-300 p-2 text-[#23BE0A] rounded-3xl" key={idx}>#{tag} </div>)}
                </div>
                <div className="flex items-center gap-8 ">
                    <div className="flex items-center gap-1 ">
                        <IoPeople />
                        <p>Publisher: {publisher}</p>
                    </div>
                    <div className="flex items-center gap-1 ">
                        <RiPagesFill />
                        <p>Page: {totalPages}</p>
                    </div>
                    <div className="flex items-center gap-1 ">
                        <CiLocationOn />
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className="border-solid border-b-2 my-2"></div>
                <div className="flex items-center gap-8 ">
                    <div className="bg-[#d6e8ff] p-3 rounded-3xl text-[#328EFF]"><p>Category: {category}</p></div>
                    <div className="bg-[#ffedd1] p-3 rounded-3xl text-[#FFAC33]"><p>Rating: {rating}</p></div>
                    <NavLink to={`/bookDetails/${bookId}`}><div><button className="btn btn-success rounded-full text-white">View Details</button></div></NavLink>
                </div>
            </div>
        </div>

    );
};

export default ListedBooksCards;