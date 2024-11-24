import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
const ProductCard = ({product}) => {
    return(
        <div className="product-card">
            <img src={product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <Link to={`/product/${product._id}`}>View Details</Link>
        </div>
    )
};

ProductCard.propTypes = {
    product : PropTypes.shape({
        _id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image:PropTypes.string.isRequired
    }).isRequired,
};

export default ProductCard;