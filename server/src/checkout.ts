import { stripe } from "./";
import Stripe from "stripe";

/**
 * Create a stripe checkout session with line items 

*/

export async function createStripeCheckoutSession(
    line_items: Stripe.Checkout.SessionCreateParams.LineItem[]
) {
    //example item here 
    /** 
     * {
     *      name:'Shirt',
     *      amount:500,
     *      currency: usd,
     *      quantity:1,
     * }
    */
    const url = process.env.WEBAPP_URL

    const session = await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        line_items,
        success_url:`${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url:`${url}/failed`

    });
    return session


}
    

