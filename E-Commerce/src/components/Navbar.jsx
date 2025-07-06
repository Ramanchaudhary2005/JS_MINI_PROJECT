import {useNavigate, useSearchParams} from "react-router";
import {useState} from "react";
import { Link } from 'react-router-dom';



const Navbar = ()=>{
    const[searchParams, setSearchParams] = useSearchParams();
    const [searchText, setSearchText] = useState(searchParams.get("text")) || "";
    let navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/search?text=${searchText}`);
    }

    return (
        <nav className="flex px-4 py-4 justify-between items-center bg-gray-900">
            <Link to="/" className="text-white">My App</Link>

            <div className="flex">
                <input
                    className="px-4 py-1 border border-black rounded-l-md bg-white w-72"
                    placeholder="Search MyApp.in"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    onClick={handleSearch}
                    className="px-4 py-1 border border-black rounded-r-md bg-[#EBC759] text-black cursor-pointer"
                >
                    🔍
                </button>
            </div>

            <div className="h-6 w-6 bg-white rounded-full"></div>
        </nav>
    );

};

export { Navbar };