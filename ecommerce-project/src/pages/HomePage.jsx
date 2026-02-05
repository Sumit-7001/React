// import './header.css'
import axios from "axios";
import "./HomePage.css";
import Header from "../components/Header";
// import { products } from "../../starting-code/data/products";
import { useEffect, useState } from "react";

export function HomePage({ cart ,loadCart }) {
  const [products, setProducts] = useState([]);
  const [Quantity, setQuantity] = useState(1);
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
              <>
                <div className="product-container">
                  <div className="product-image-container">
                    <img className="product-image" src={product.image} />
                  </div>

                  <div className="product-name limit-text-to-2-lines">
                    {product.name}
                  </div>

                  <div className="product-rating-container">
                    <img
                      className="product-rating-stars"
                      src={`images/ratings/rating-${product.rating.stars * 10}.png`}
                    />
                    <div className="product-rating-count link-primary">
                      {product.rating.count}
                    </div>
                  </div>

                  <div className="product-price">
                    $ {(product.priceCents / 100).toFixed(2)}
                  </div>

                  <div className="product-quantity-container">
                    <select value={Quantity} onChange={(event)=>{
                       const quantitySelected= Number(event.target.value);
                       setQuantity(quantitySelected);
                       console.log(quantitySelected );
                       
                      
                    }} >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>

                  <div className="pro duct-spacer"></div>

                  <div className="added-to-cart">
                    <img src="images/icons/checkmark.png" />
                    Added
                  </div>

                  <button className="add-to-cart-button button-primary"
                  onClick={ async()=>{
                    await axios.post('/api/cart-items',{
                      productId:product.id,
                      quantity:1
                    });
                   await loadCart();
                  }}
                  >
                    Add to Cart
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
