console.log(location);
const url = new URLSearchParams(location.search);
const fsame = localStorage.getItem('secondname');
const fsname = localStorage.getItem('firstname');

document.getElementById('fname').innerText = fsname;
document.getElementById('sname').innerText = fsame;

