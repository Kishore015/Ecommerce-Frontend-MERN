import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo-container">
                <img src="" alt="Logo" />
            </div>
            <div className="nav-links">
                <Link to='/' className="nav-link">Home</Link>
                <Link to='/products' className="nav-link">Products</Link>
                <Link to='/login' className="nav-link">Login</Link>
                <Link to='/register' className="nav-link">Register</Link>
                <Link to='/profile' className="nav-link">User Profile</Link>
                <Link to='/cart' className="nav-link">Cart</Link>
            </div>
        </div>
    )
}

export default Navbar;