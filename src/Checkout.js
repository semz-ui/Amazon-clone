import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <Header />
      <div className="checkout__Box">
        {basket?.length === 0 ? (
          <div className="nobasket">
            <div className="ch__img">
              <img
                src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                alt="ckimg"
              />
            </div>
            <div className="nobasket__text">
              <h2>Your Amazon Cart is empty.</h2>
              <Link to="/" className="nobasket__text1">
                <p style={{ color: "#007185" }}>Shop today's deal</p>
              </Link>
              <div style={{ marginTop: "20px" }}>
                <button className="ck_btn ck_btn1__color">
                  Sign in to your account
                </button>
                <button
                  className="ck_btn"
                  style={{
                    marginLeft: "10px",
                    backgroundColor: "rgb(234, 237, 237)",
                  }}
                >
                  Sign up now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="yesbasket">
            <h2 style={{ margin: "20px" }}>Your shopping basket</h2>
            {basket.map((item, id) => (
              <CheckoutProduct
                key={id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
