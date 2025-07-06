import { useEffect, useState } from "react";
import {Footer} from "../components/Footer";
import {Navbar} from "../components/Navbar";
import { useParams } from "react-router";

const ViewPage=()=>{
    const params = useParams();
    const {productId} = params;
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    const getProductInfo = async() =>{
        try{
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products/${productId}`);
            const data = await response.json();
            setProduct(data);
        }catch(err){
            alert(`Error getting product info: ${err.message}`);
        }
        finally{
            setLoading(false);
        }
    };

    useEffect(()=>{
        getProductInfo();
    }, []);

    return(
        <>
            <Navbar />
            <main>
                {
                    loading?<div className="h-25 flex items-center justify-center"><p>Loading...</p></div>:
                <>
                <h1>{product.title}</h1>
                <div className="flex flex-wrap gap-8 items-center justify-center py-4">
                    {product.images?.map((elem)=>{
                        return <img key={elem} src={elem} width="150"></img>
                    })}
                </div>
                </>
                }           
            </main>
            <Footer />
        </>
    );
};

export {ViewPage};