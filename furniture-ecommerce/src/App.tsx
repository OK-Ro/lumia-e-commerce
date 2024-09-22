import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Wishlist from "./pages/Wishlist";
import ProductDetail from "./pages/ProductDetails";
import Products from "./pages/Products";
import Shop from "./pages/Shop";
import Nav from "./components/Nav";
import Footer from "./pages/Footer";
import OurStory from "./components/OurStory";
import Services from "./pages/Services";

const MainContent = styled.div`
  max-width: 160rem;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
`;

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/services" element={<Services />} />
          <Route path="about/our-story" element={<OurStory />} />
        </Routes>
      </MainContent>
      <Footer />
    </Router>
  );
};

export default App;
