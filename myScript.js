let variable = 0;

let myText = 'hello world';
console.log(myText);

function calculate(op) {

    let answer = arguments[1];

    switch(op){
        case '+':
            for (let i = 2; i < arguments.length; i++ ){
              answer = answer + arguments[i];
            }
            return answer;
            case '-':
                for (let i = 2; i < arguments.length; i++ ){
                    answer -= arguments[i];
                }
                return answer;
        case '*':
            for (let i = 2; i < arguments.length; i++ ){
                answer = answer * arguments[i];
            }
            return answer;
        case '/':
            for (let i = 2; i < arguments.length; i++ ){
                answer /= arguments[i];
            }
            return answer;
        default:
            console.log("canny calculate fam");
            break;

    }


}

// const containerEl = document.getElementById("Stuffgoeshere")
// const newEL = document.createElement("p");
// newEL.innerText = 'Paragraph content';
// containerEl.append(newEL);

function cardCounter(element) {
    const cardContEL = document.getElementById("counter")
    cardContEL.append(document.createElement("textarea"))


}

function handleClick(element){
    const containerEl = document.getElementById("Stuffgoeshere");
    const newEL = document.createElement('button');
    newEL.innerText = 'Paragraph content';
    newEL.addEventListener('click', () => console.log('clicked'));
    containerEl.append(newEL);
    //containerEl.removeChild(newEL);
    let animals = ['frog', 'llama', 'elephant', 'crocodile', 'hippopotamus', 'aardvark', 'geoff'];
    for (let animal of animals){
        const animalButton = document.createElement('button')
        animalButton.innerText = animal;
        animalButton.addEventListener('click', () => {console.log(animal)});
        containerEl.append(animalButton);
    }

}

function handleButtonclicks(element){
    const containerEl = document.getElementById("card")
    const plus10 = document.getElementById('plus10');
    const minus10 = document.getElementById('minus10');
    const plus1 = document.getElementById('plus1');
    const minus1 = document.getElementById('minus1');
    const zero = document.getElementById('zero');







}

function plus10(){
    const displaybutton = document.getElementById('card');
    variable = variable + 10;
    colour(variable);
    displaybutton.innerText = variable;
    const newEL = document.getElementById('history');
    const newButton = document.createElement('button');
    newButton.innerText = variable
    newButton.addEventListener('click', () => { const displaybutton = document.getElementById('card'); displaybutton.innerText = variable;});
    newEL.append(newButton);
}

function plus1() {
    const displaybutton = document.getElementById('card');
    variable = variable + 1;
    colour(variable);
    displaybutton.innerText = variable;
    const newEL = document.getElementById('history');
    const newButton = document.createElement('button');
    newButton.innerText = variable
    newButton.addEventListener('click', () => { displaybutton.innerText = variable;});
    newEL.append(newButton);
}

function minus10() {
    const displaybutton = document.getElementById('card');
    variable = variable - 10;
    colour(variable);
    displaybutton.innerText = variable;
    const newEL = document.getElementById('history');
    const newButton = document.createElement('button');
    newButton.innerText = variable;
    newButton.addEventListener('click', () => {displaybutton.innerText = variable;});
    newEL.append(newButton);
}

function minus1() {
    const displaybutton = document.getElementById('card');
    variable = variable - 1;
    colour(variable);
    displaybutton.innerText = variable;
    const newEL = document.getElementById('history');
    const newButton = document.createElement('button');
    newButton.innerText = variable;
    newButton.addEventListener('click', () => {displaybutton.innerText = variable;});
    newEL.append(newButton);
}

function zero() {
    const displaybutton = document.getElementById('card');
    variable = 0;
    displaybutton.innerText = variable;
    colour(variable);
    const newEL = document.getElementById('history');
    const newButton = document.createElement('button');
    newButton.innerText = variable;
    newButton.addEventListener('click', () => {displaybutton.innerText = variable;});
    newEL.append(newButton);
}


function colour(x){
    const box = document.getElementById("card");
    if (x % 2 == 1){
        box.style.color = 'red';
    }else if(x % 2 == 0) {
        box.style.color = 'green';
    }
     if (x > 100){
        const displaybutton = document.getElementById('card');
        displaybutton.innerText= variable + '!';
     } else {
         console.log('naw');
         }

}

let s = 'Animals: ';
let f = '.';

let animals = ['frog', 'llama', 'elephant', 'crocodile', 'hippopotamus', 'aardvark', 'geoff'];



animals = animals.filter(word => word.length < 9 )
                 .map( word =>  " " + word.charAt(0).toUpperCase() + word.slice(1));
console.log(s + animals + f);
