import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero bg-base-200 h-[70vh] mt-8 rounded-3xl flex items-center justify-center mb-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co.com/jZfq9Jn/pngwing-1.png"
                    className="max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-6xl font-bold mb-12">Books to freshen up <br /> your bookshelf</h1>
                    
                    <NavLink to='/listedBooks'><button className="btn btn-primary font-semibold text-xl text-white btn-success">View The List</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;