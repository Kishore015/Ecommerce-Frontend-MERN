import Navbar from "./Navbar"
import PropTypes from "prop-types";


const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <main>{children}</main>
    </>
  )
};
Layout.propTypes = {
    children: PropTypes.object.isRequired
  }

export default Layout