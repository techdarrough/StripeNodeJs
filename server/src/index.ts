// Env vars and stripe api
import { config } from "dotenv";
if (process.env.NODE_ENV !== "production") {
    config();
}

// Init Stripe
import Stripe from "stripe";
export const stripe = new Stripe(process.env.STRIPE_SECERT, {
    apiVersion: "2020-03-02",
});

import { app } from "./api";
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on http://localhost:${port}`));
