console.log(location);
const url = new URLSearchParams(location.search);
console.log(url.get('name'));

console.log(localStorage.getItem('crap'));