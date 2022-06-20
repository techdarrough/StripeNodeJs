// Env vars and stripe api
import { config } from "dotenv";
if (process.env.NODE_ENV !== "production") {
    config();
}

// Init Stripe
import Stripe from "stripe";
export const stripe = new Stripe(process.env.STRIPE_SECERT, {
    apiVersion: '2020-08-27',
});

// import app
import { app } from "./api";

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`API running on http://localhost:${port}`));
