const ProductCard = (props) => {
  const { title, price, thumbnail } = props;

  return (
    <div className="border border-gray-300 rounded-xl p-4 bg-white shadow-md hover:shadow-2xl shadow-gray-400 transition duration-300 flex flex-col items-center
        cursor-pointer">
      <img
        src={thumbnail}
        alt="product"
        className="w-38 h-38 object-cover rounded-md mb-4"
      />
      <p className="text-xl font-semibold text-center">{title}</p>
      <p className="text-gray-700 text-sm mt-2">Rs. {price * 85}</p>
    </div>
  );
};

export { ProductCard };
