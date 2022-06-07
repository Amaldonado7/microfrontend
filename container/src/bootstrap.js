import { mount } from 'products/ProductsIndex';
import { cartMount } from 'cart/CartShow';

console.log('Container!');
mount(document.querySelector('#app1'));
cartMount(document.querySelector('#app2'));
