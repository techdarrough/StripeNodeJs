import React, { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { fetchFromAPI } from "./Helpers";

export function Checkout() {
  const stripe = useStripe();
  const [product, setProduct] = useState({
    name: "Hat",
    description: "Pug hat. Pugs love it.",
    images: ["https://unsplash.com/photos/5R5HgLyHMVQ"],
    amount: 799, //$7.99(799 cents)
    currency: "usd",
    quantity: 0,
  });

  const changeQuantity = (v) =>
    setProduct({ ...product, quantity: Math.max(0, product.quantity + v) });

  const handleClick = async (event) => {
    const body = { line_items: [product]}
    const { id: sessionId } = await fetchFromAPI('checkouts', {
        body
    });

    const {error} = await stripe.redirectToCheckout({
        sessionId,
    });
    if (error) { conslog.log(error)};

  };

  return (
    <>
      <div>
        <h3>Stripe Amount: {product.quantity}</h3>

        <img src={product.images[0]} alt="Product" />
        <button onClick={() => changeQuantity(-1)}>-</button>
        <span>{product.quantity}</span>
        <button onClick={() => changeQuantity(1)}>+</button>
      </div>
      <hr />
      <button onClick={handleClick} disabled={product.quantity < 1}>
        Start Checkoout
      </button>
    </>
  );
}
 

export function CheckoutSuccess() {
    const url = window.location.href  //grabs url from strip
    const sessionId = new URL(url).searchParams.get('sessionId'); //used searchParams get to fin sessionId in retrived string data
    return <h3> checkout was successfull </h3>
}


export function CheckoutFail() {
    return <h3> Checkout was failure </h3>
}