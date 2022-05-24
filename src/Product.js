import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);
  const addToBasket = () => {
    // Add Item To Basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        key: id,
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} className="product__image" alt="" />
      <button className="basket" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
