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
            <main>
                {products.map((elem)=>{
                    return <ProductCard key = {elem.id}{...elem}/>;
                })}
            </main>
            <Footer />
        </>
    );
};

export {SearchPage};