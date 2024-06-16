"use server"
import Stripe from "stripe";

export async function getproducts(){
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const products = await stripe.products.list();
    return products;
}
export async function checkout(priceIds: string){
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    // let data = 
    let priceId = priceIds
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ],
      mode: 'payment',
      success_url: 'http://localhost:3000',
      cancel_url: 'http://localhost:3000'
    })
    return session.url;
}