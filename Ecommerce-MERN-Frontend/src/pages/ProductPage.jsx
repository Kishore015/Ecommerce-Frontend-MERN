import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProductByID } from "../services/productService";

const ProductPage = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
           const data = await getProductByID(id);
           setProduct(data) 
        }
        fetchProduct();
    },[id])

    return (
        <div className="product-page">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Price:${product.price}</p>
        </div>
    )
}

export default ProductPage;