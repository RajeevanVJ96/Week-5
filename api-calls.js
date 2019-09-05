const req = new XMLHttpRequest();
let data;

function getTeamMemberDetails(datum) {
    count = 1;

    function powers(iElement) {
        for(let i of iElement){
            document.getElementById('div' + count).innerText = i;
        }

    }

    for (let i of datum) {
        document.getElementById('hero' + count).append(
            document.createElement('div').innerText = "name: " + i['name'] + " age: " + i['age'] + " secretI: " + i['secretIdentity']);
            document.getElementById('div' + count).append(document.createElement('div').innerText = powers(i['powers']));
        console.log(i);
        count++;
    }

}

req.onload = () => {
    console.log(req.response);
    data = JSON.parse(req.response);
    getTeamName(data);
    getTeamDetails(data);
    getTeamMemberDetails(data['members']);
}

req.open('GET', 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json');
req.send();

function getTeamName(data) {
    document.getElementById('name').innerText = data.squadName;
}

function getTeamDetails(data) {
    const head2 = document.getElementById('details');
    const ht = document.createElement('p').innerHTML = ("Home Town: " + data.homeTown);
    head2.append(ht);
    const f = document.createElement('p').innerHTML = ("Formed: " + data.formed);
    head2.append(f);
    const sb = document.createElement('p').innerHTML = ("Secret Base: " + data.secretBase);
    head2.append(sb);
    const a = document.createElement('p').innerHTML = ("Active: " + data.homeTown);
    head2.append(a);


}

function makeRequest() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status == 200) {
                resolve(xhr.response);
            } else {
                reject('Request failed')
            }
        };
        xhr.open('GET', 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json');
        xhr.send();


    });
}


makeRequest().then(data => {
        console.log('It worked', data);
        return makeRequest()
    }
).catch(() => {
    console.log('It didnt work')
})








