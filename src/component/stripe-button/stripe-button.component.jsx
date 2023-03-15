import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100
    const publishableKey='pk_test_51MlqSVGrAJXlj17Vj9JcctSyGyLGiLjjSOspn6J5LzPzxaEz4zJYqHYzWqUhZ30oLFOVs0ggg5hH9PPYSU1bMJE700ha1VegSt'
const onToken=token=>{
    console.log(token)
    alert("payment succesful")
}
    return(
        <StripeCheckout
        label="Pay Now"
        name="Prince clothing Ltd."
        billingAddress
        shippingAddress
        image=""
        description={`your total is ${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}

        />
    )

}
export default StripeCheckoutButton;