// Example of an app
// Faker library that is used to create fake data
import faker from 'faker';

const cartMount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#cart-dev');

  if (el) {
    cartMount(el);
  }
}

export { cartMount };
