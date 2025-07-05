import {useNavigate, useSearchParams} from "react-router";
import {useState} from "react";


const Navbar = ()=>{
    const[searchParams, setSearchParams] = useSearchParams();
    const [searchText, setSearchText] = useState(searchParams.get("text")) || "";
    let navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/search?text=${searchText}`);
    }

    return(
        <nav className="flex px-4 py-4 justify-between items-center bg-indigo-700">
            <p>My App</p>
            <div>
                <input className="px-2 py-1 border-1 border-amber-500 rounded-xl"
                    value={searchText}
                    onChange={(e)=>{setSearchText(e.target.value)}}
                />
                <button onClick={handleSearch}
                    className="px-2 py-1 border-1 border-amber-500 rounded-xl bg-amber-400 text-amber-50 cursor-pointer">
                    Search
                </button>
            </div>
            <div className="h-6 w-6 bg-amber-600 rounded-full">

            </div>
        </nav>
    );
};

export { Navbar };