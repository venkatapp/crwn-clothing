import React from 'react';

import StripeCheckOut from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe=price * 100;
    const publishablekey='pk_test_51HqYtYI8JLVqactDBInjzmr8Supxw3LkuQsLq5RpQfBEhnwi90SleqLzLjqr9a2ra46JcUSkYdh3l4DQs4ToooPT00z1drNW7H';

   const onToken= token =>{
        console.log(token);
        alert('payment successful');
    }

    return(
        <StripeCheckOut
        label='Pay Now'
        name="CRWN Clothing LTD"
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}
        />
    )
}


export default StripeCheckoutButton;