import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useSearchParams } from "react-router";
import { ProductCard } from "../components/ProductCard";

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchText = searchParams.get("text");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getSearchResults = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
            const data = await response.json();
            setProducts(data.products);
        } catch (err) {
            alert(`Can't get search results: ${err.message}`);
        } finally {
            setTimeout(() => setLoading(false), 500);
        }
    };

    useEffect(() => {
        getSearchResults();
    }, [searchText]);

    const dummyArray = Array(8).fill(null); // You can adjust the count

    return (
        <>
            <Navbar />
            <main className="bg-gray-200 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {loading
                    ? dummyArray.map((_, ind) => (
                        <div className="border border-gray-300 rounded-xl p-4 bg-white shadow-md hover:shadow-2xl shadow-gray-400 transition duration-300 flex flex-col items-center cursor-pointer">
                                
                            <div className="mb-2">
                                <div className="w-38 h-38 bg-gray-200"></div>    
                            </div> 
                            <div className="space-y-2">
                                <p className="bg-gray-200 py-2 w-38 h-10"></p>
                                <p className="bg-gray-200 py-2 w-38 h-10"></p>    
                            </div>                           
                            
                        </div>
                    ))
                    : products.map((elem) => (
                        <ProductCard key={elem.id} {...elem} />
                    ))}
            </main>
            <Footer />
        </>
    );
};

export { SearchPage };
