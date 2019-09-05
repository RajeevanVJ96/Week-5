
function handleThis(form) {

    let formObject = {};

    for (let element of form.elements) {
        if (element.id) {
            formObject[element.id] = element.value;
        }

    }

    console.log(formObject);
    console.log(urlToSend);
    const req = new XMLHttpRequest();
    req.onload = () => {
        location.href = 'Login.html';
    };
    req.open('POST', 'https://us-central1-qac-sandbox-c347f.cloudfunctions.net/setUser');
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(formObject));


    return false;

}




