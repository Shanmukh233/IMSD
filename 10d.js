const url=require('url');

const address='https://www.example.com/products?
category=books&price=low';
const parseurl=url.parse(address,true);

console.log('Host:', parseurl.host);
console.log('Pathname:', parseurl.pathname);
console.log('Query Parameters:', parseurl.query);
