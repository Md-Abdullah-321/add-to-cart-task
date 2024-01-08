import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import Products from "../pages/Products";

function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Index;
