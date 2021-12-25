import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price + 100;
  const pubbishableKey =
    'pk_test_51KAdvxJUIExNkZF54oOC6tch9btZUnA6p25bXn8Zz2Ixyy9Np0cnGJ0GW2LrQL1Te2PMdi4L8tfsCHeKw7TJT8f000xQ1kqktu';

  const onToken = token => {
    console.log(token);
    alert('Payment Successfull');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='PayNow'
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
