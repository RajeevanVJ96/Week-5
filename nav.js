
test = 'hello';
function handleClickButton() {

    //document.cookie = "name=Chris"

    localStorage.setItem('crap', "This group cannot be trusted");

    location.href = 'secondPage.html?name=ian&age=21';

}

console.log(location);
const url = new URLSearchParams(location.search);
console.log(url.get('name'));

