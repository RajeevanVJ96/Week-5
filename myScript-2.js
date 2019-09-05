const people=["Hello", "Ian", "Chris", "Vin"];
//const[zero, , ... hello] = people;

const acc1 = {
    id : 1,
    name: 'Raj',
    location: 'Scotland'
};

const acc2 = {
    degree: 'cs',
    name: 'Sav',
    age: 21,
    hobby: 'ice skating'
};

let a = 'basketball';
let b = 'spanner';

[a,b] = [b,a];

console.log(a,b);

const{name, ...rest} = acc1;
const[zero, , rem] = people;

const merged = {...acc1, ...rem };

function myfunct2({name}) {
    console.log('my name is ' + name);

}

myfunct2({name: "Ian"});

function handleEvent(element) {
    console.log('EVENT happened', element.value);
}

function handleSubmit(form) {
    const formDataObj = {};


    for(let element of form.elements) {
        if (element.id) {
            formDataObj[element.id] = element.value;
           }

    }

    const{firstname: hello,lastname} = formDataObj;
    console.log(hello);
    console.log(lastname);
    alert(formDataObj['firstname']);
    return false;
}

function updateTitle(element) {
    document.getElementById('toBeChanged').innerText = "Guess whos back, back again." + element.value + "'s back tell a friend";

}