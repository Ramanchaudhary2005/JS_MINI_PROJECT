import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useParams } from "react-router";
import { Atom } from "react-loading-indicators";

const ViewPage = () => {
    const params = useParams();
    const { productId } = params;
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    const getProductInfo = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products/${productId}`);
            const data = await response.json();
            setProduct(data);
        } catch (err) {
            alert(`Error getting product info: ${err.message}`);
        } finally {
            setTimeout(() => setLoading(false), 800);
        }
    };

    useEffect(() => {
        getProductInfo();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Navbar />
            <main className="min-h-screen flex items-center justify-center bg-gray-50 py-8">
                {loading ? (
                    <div className="h-25 flex items-center justify-center">
                        <Atom color="#101828" size="medium" text="" textColor="" />
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full flex flex-col md:flex-row gap-8 p-8">
                        <div className="flex-1 flex flex-col items-center">
                            <img
                                src={product.images?.[0]}
                                alt={product.title}
                                className="w-64 h-64 object-cover rounded-xl border mb-4"
                            />
                            <div className="flex gap-2 flex-wrap justify-center">
                                {product.images?.map((img, idx) => (
                                    <img
                                        key={img}
                                        src={img}
                                        alt={`thumb-${idx}`}
                                        className="w-16 h-16 object-cover rounded border cursor-pointer hover:ring-2 hover:ring-blue-400 transition"
                                        onClick={() => setProduct(p => ({ ...p, images: [img, ...p.images.filter(i => i !== img)] }))}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                                <p className="text-gray-500 mb-4 capitalize">{product.category}</p>
                                <p className="text-lg mb-4">{product.description}</p>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-2xl font-bold text-green-600">${product.price}</span>
                                    {product.discountPercentage && (
                                        <span className="text-sm text-red-500 bg-red-100 px-2 py-1 rounded">
                                            -{product.discountPercentage}% OFF
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-yellow-500 text-xl">★</span>
                                    <span className="font-medium">{product.rating}</span>
                                    <span className="text-gray-400 text-sm">(Rating)</span>
                                </div>
                                <div className="text-sm text-gray-600 mb-2">
                                    <span className="font-semibold">Brand:</span> {product.brand}
                                </div>
                                <div className="text-sm text-gray-600">
                                    <span className="font-semibold">Stock:</span> {product.stock}
                                </div>
                            </div>
                            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
};

export { ViewPage };