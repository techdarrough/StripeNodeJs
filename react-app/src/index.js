import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  "pk_test_51LC5V0KIkxK9b8e8ndlYVcKNyPspsITSEv1BL6CkvvVHb9UEli7c1eWVseHooKXlgcZQIM7umxCe595UeXy7mCqx00AeP4qFBt"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>
);
