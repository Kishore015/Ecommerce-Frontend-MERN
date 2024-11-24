import { useEffect, useState } from "react"
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";

const Homepage = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchProducts = async() =>{
            const data = await getProducts();
            setProducts(data);
        }
        fetchProducts();
    },[]);
    return(
        <div className="home-page">
            <h1>Our Products</h1>
            <div className="products-list">
                {products.map((product)=>(
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Homepage;