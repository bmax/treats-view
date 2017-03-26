
<template>
<div id="loading"> <img src='../../assets/gears.svg' /></div>
</template>
<script>
import braintree from 'braintree-web'

// We generated a client token for you so you can test out this code
// immediately. In a production-ready integration, you will need to
// generate a client token on your server (see section below).
var authorization = process.env.BRAINTREE_AUTH;

export default {
  created() {
  // Create a Client component
      braintree.client.create({
        authorization: authorization
      }, function (clientErr, clientInstance) {
        // Create PayPal component
        braintree.paypal.create({
          client: clientInstance
        }, function (err, paypalInstance) {
            paypalInstance.tokenize({
            flow: 'checkout', // Required
            amount: 10.00, // Required
            currency: 'USD', // Required
            locale: 'en_US',
            enableShippingAddress: true,
            shippingAddressEditable: false,
            shippingAddressOverride: {
              recipientName: 'Scruff McGruff',
              line1: '1234 Main St.',
              line2: 'Unit 1',
              city: 'Chicago',
              countryCode: 'US',
              postalCode: '60652',
              state: 'IL',
              phone: '123.456.7890'
            }
          }, function (err, tokenizationPayload) {
            // Tokenization complete
            // Send tokenizationPayload.nonce to server
            console.log( tokenizationPayload);
            console.log( err);
          });
        });
      });
  }
}
</script>

<style scoped>
#loading {
  background-image: url(/assets/gear.svg) center no-repeat;
}
</style>