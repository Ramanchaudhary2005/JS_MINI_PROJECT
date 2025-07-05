const ProductCard = (props)=>{
    const {title, price, thumbnail} = props;
    return(
        <div>
            <p>{title}</p>
            <p>Rs. {price*85}</p>
            <img src={thumbnail} alt="productimage" />
        </div>
    )
}

export {ProductCard};