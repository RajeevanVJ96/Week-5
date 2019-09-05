function handleThis(form) {

    let formObject = {}

    for( let element of form.elements){
        if (element.id) {
            formObject[element.id] = element.value;
        }
    }

    let urlToSend = `username=${formObject.username}&password=${formObject.password}`;

    const req = new XMLHttpRequest();
    req.onload = () => {
        data = JSON.parse(req.response);
        console.log(data);
        localStorage.setItem('firstname', data.firstname);
        localStorage.setItem('secondname',data.secondname);
        location.href = `view.html?firstname=${data.firstname}&secondname=${data.secondname}`;
    }
    req.open('GET', 'https://us-central1-qac-sandbox-c347f.cloudfunctions.net/login?' + urlToSend);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send();

    return false;



}

function handleData(data) {
    let dts = {};

    for(let element of data.elements){
        if (element.id) {
            dts[element.id] = element.value;
        }
    }

    let stoadd = `?firstname=${dts.firstname}&secondname=${dts.secondname}`;
    return stoadd;
}

