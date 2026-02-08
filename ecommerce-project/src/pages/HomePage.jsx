// import './header.css'
import axios from "axios";
import "./HomePage.css";
import Header from "../components/Header";
// import { products } from "../../starting-code/data/products";
import { useEffect, useState } from "react";
import Product from "./Product";

export function HomePage({ cart ,loadCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");

      setProducts(response.data);
    };
    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">

        <div className="products-grid">
          {products.map((product) => {
            return (
             <Product loadCart={loadCart} product={product} key={product.id} />
            );
          })}
        </div>
      </div>
    </>
  );
}
