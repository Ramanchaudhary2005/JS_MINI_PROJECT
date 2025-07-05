import { useEffect, useState } from "react";
import {Footer} from "../components/Footer";
import {Navbar} from "../components/Navbar";
import { useSearchParams} from "react-router";
import { ProductCard } from "../components/ProductCard";


const SearchPage=()=>{
    const [searchParams, setSearchParams] = useSearchParams();
    const searchText = searchParams.get("text");
    const [products, setProducts] = useState([]);

    const getSearchResults = async () =>{
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const data = await response.json();
        setProducts(data.products);
    };

    useEffect(()=>{
        getSearchResults();
    }, [searchText]);

    return(
        <>
            <Navbar />
            <main className="bg-gray-200 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((elem)=>{
                    return <ProductCard key = {elem.id}{...elem}/>;
                })}
            </main>
            <Footer />
        </>
    );
};

export {SearchPage};