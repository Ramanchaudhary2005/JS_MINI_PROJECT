import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useLocation, useNavigate } from "react-router";

const CategoryViewPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const params = new URLSearchParams(location.search);
    const category = params.get("name");

    useEffect(() => {
        if (!category) return;
        setLoading(true);
        fetch(`https://dummyjson.com/products/category/${encodeURIComponent(category)}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products || []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [category]);

    const handleProductClick = (id) => {
        navigate(`/${id}/view`);
    };

    return (
        <>
            <Navbar />
            <main className="p-4">
                <h1 className="text-2xl font-bold mb-4 capitalize">{category} Products</h1>
                {loading ? (
                    <p>Loading products...</p>
                ) : products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 cursor-pointer">
                        {products.map(product => (
                            <div
                                key={product.id}
                                className="border rounded-lg p-4 shadow cursor-pointer hover:bg-gray-100 transition"
                                onClick={() => handleProductClick(product.id)}
                            >
                                <h2 className="font-semibold mb-2">{product.title}</h2>
                                <p className="text-gray-600 mb-2">{product.category}</p>
                                <img src={product.thumbnail} alt={product.title} className="w-38 h-40 object-cover mb-2 rounded" />
                                <p className="font-bold">${product.price}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No products found.</p>
                )}
            </main>
            <Footer />
        </>
    );
};

export { CategoryViewPage };