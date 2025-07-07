import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router"; 

const HomePage = () => {
    const [productCategory, setProductCategory] = useState([]);
    const navigate = useNavigate(); 

    const fetchCategories = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products/categories');
            const data = await response.json();
            setProductCategory(data);
        } catch (error) {
            console.error("Failed to fetch categories:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleCategoryClick = (category) => {
        navigate(`/category?name=${encodeURIComponent(category)}`);
    };

    return (
        <>
            <Navbar />
            <main className="p-4">
                <h1 className="text-2xl font-bold mb-4">Product Categories</h1>

                {Array.isArray(productCategory) && productCategory.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
                        {productCategory.map((category, index) => (
                            <button
                                key={index}
                                className="bg-gray-800 text-white font-medium py-4 px-6 rounded-2xl shadow-md hover:shadow-xl hover:bg-gray-700 cursor-pointer transition duration-200 capitalize"
                                onClick={() => handleCategoryClick(typeof category === "string" ? category : category.name)}
                            >
                                {typeof category === "string" ? category : category.name}
                            </button>
                        ))}
                    </div>
                ) : (
                    <p>Loading categories...</p>
                )}
            </main>
            <Footer />
        </>
    );
};

export { HomePage };



