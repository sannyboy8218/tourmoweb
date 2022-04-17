import { ExpandRounded } from '@mui/icons-material';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {PaymentElement} from '@stripe/react-stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51KkR9dJr6kxoNxWUqpOCyJEi7RsG33ExX7aHO6quzqw0uUQ01HgLmT0U7DMqcZSZIC2jRxJdlJuJeeryEoRO8Akb00XFC5FxuS');

function Payment() {
 

  return (
    <Elements stripe={stripePromise} >
      <CheckoutForm />
    </Elements>
  );
};

export default Payment

const CheckoutForm = () => {
    return (
      <form>
        <PaymentElement />
        <button>Submit</button>
      </form>
    );
  };