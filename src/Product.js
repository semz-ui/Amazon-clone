import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ data }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);
  const addToBasket = () => {
    // Add Item To Basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        key: data.id,
        id: data.id,
        title: data.title,
        image: data.image,
        price: data.price,
        rating: data.rating,
      },
    });
  };

  return (
    <div className="product" key={data.id}>
      <div className="product__info">
        <p>{data.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{data.price}</strong>
        </p>
        <div className="product__rating">
          {Array(data.rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={data.image} className="product__image" alt="" />
      <button className="basket" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
