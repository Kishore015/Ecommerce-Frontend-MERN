import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import Homepage from "./pages/Homepage";
import { Route, Routes, BrowserRouter } from "react-router-dom"
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

const App = () => {
  return(
    <Layout>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} exact/>
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user-profile" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App;